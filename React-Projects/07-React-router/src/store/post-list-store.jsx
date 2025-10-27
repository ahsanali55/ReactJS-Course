import { useMemo, useState, useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

// Reducer Function
const postListReducer = (curPostList, action) => {
  let newPostList = curPostList;

  if (action.type === "DELETE_POST") {
    newPostList = curPostList.filter((post) => {
      return action.payload.postId !== post.id;
    });
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...curPostList];
  }

  return newPostList;
};

// component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (posts) => {
    console.log(posts)
    const addPostList = {
      type: "ADD_POST",
      payload: posts,
    };
    
    dispatchPostList(addPostList);
  };
  
  const addInitialPost = (posts) => {
    console.log(posts)
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (Id) => {
    const delPostObj = {
      type: "DELETE_POST",
      payload: {
        postId: Id,
      },
    };

    dispatchPostList(delPostObj);
  };

  // // Data Fetching from Server
  // useEffect(() => {
  //   const controller = new AbortController(); // create controller
  //   const signal = controller.signal;

  //   setFetching(true);
  //   console.log("fetch started");
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resObj) => {
  //       addInitialPost(resObj.posts);
  //       setFetching(false);
  //     })
  //     .catch((err) => {
  //       if (err.name === "AbortError") {
  //         console.log("Fetch aborted ❌");
  //       } else {
  //         console.error("Fetch error:", err);
  //       }
  //     });

  //   // cleanup - runs when component unmounts
  //   return () => {
  //     console.log("CleaningUp useEffect and cancel server request");
  //     controller.abort();
  //   };
  // }, []);

  // prevent re-render the postlist and fetching which means both are always same until they are not change/update while whole component is re-render
  const Context = useMemo(() => {
    return {
      postList,
      addPost,
      deletePost,
    };
  }, [postList]);

  return (
    <PostList.Provider value={Context}>
      {/* App Components */}
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
