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
  }
   else if (action.type === 'ADD_POST'){
    newPostList =[action.payload, ...curPostList]
   }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    
    const addPostList = {
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      }
    };
    
    dispatchPostList(addPostList);
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {/* App Components */}
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  
];

export default PostListProvider;
