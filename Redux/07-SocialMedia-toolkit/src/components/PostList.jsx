
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useSelector } from "react-redux";



const PostList = () => {
  const  { postlist }   = useSelector((state) => state.postLists )

  return (
    <>
    
      {Array.from(postlist).map((post) => (
       

        <Post key={post.userId} post={post} />
      ))}
    </>
  );
};

export default PostList;
