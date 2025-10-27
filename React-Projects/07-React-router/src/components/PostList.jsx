import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
   console.log("postList rendered")
  return (
    <>
      {/* { <LoadingSpinner />}  */}
      {postList.length === 0 && <WelcomeMessage />}
      { postList.map((post) => (
        <Post key={post.title} post={post} />

      ))}
    </>
  );
};

export const postLoader = () => {

    return fetch("https://dummyjson.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.posts;
      })
}

export default PostList;
