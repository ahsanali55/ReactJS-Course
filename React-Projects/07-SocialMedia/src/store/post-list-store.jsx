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
  return curPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {
    dispatchPostList();
  };
  const deletePost = () => {
    dispatchPostList();
  };

  return (
    <PostList.Provider value={{postList, addPost, deletePost}}>
      {/* App Components */}
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Murree",
    body: "hi, Friends I am going to Murree for vacations. Hope to enjoy alot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "Murree", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass Semister",
    body: "Alhumdulilah, i have completed 5 Semisters, and now 6th Semister is on going. Inshallah i will get my degree.",
    reactions: 20,
    userId: "user-12",
    tags: ["graduations", "Believable", "Enjoying"],
  },
];

export default PostListProvider;
