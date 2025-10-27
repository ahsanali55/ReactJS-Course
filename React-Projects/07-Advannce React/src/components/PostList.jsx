import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    const controller = new AbortController(); // create controller
    const signal = controller.signal;

    setFetching(true);
    console.log("fetch started")
    fetch("https://dummyjson.com/posts", {signal})
    .then((res) => {
      return res.json();
    })
    .then((obj) => {
      addInitialPost(obj.posts);
      setFetching(false)
    }).catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted ❌");
        } else {
          console.error("Fetch error:", err);
        }
    });

    // cleanup - runs when component unmounts
    return( () =>{
      console.log("CleaningUp useEffect and cancel server request")
      controller.abort();
  })
  }, []);

  return (
    <>
      {fetching &&  <LoadingSpinner />} 
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
