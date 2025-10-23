import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        addInitialPost(obj.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
