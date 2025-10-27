import { useReducer } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
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

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    const addPostList = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    };

    dispatchPostList(addPostList);
  };

  const addInitialPost = (posts) => {
    
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

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPost }}
    >
      {/* App Components */}
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
