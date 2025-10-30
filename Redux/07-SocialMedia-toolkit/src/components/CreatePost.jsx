import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import  { postlistAction } from "../store";

const CreatePost = () => {
    const dispatch = useDispatch();

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

  const handleSumit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    
    dispatch(postlistAction.addPostList({
      userId,
      title,
      body,
      reactions,
      tags
  }));

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <div>
      <form className="createPost" onSubmit={handleSumit}
      >
        <div className="mb-3">
          <label htmlFor="user_Id" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="user_Id"
            placeholder="Your User Id"
            ref={userIdElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
            ref={postTitleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            rows={5}
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more about it..."
            ref={postBodyElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How many people reacted to this post"
            ref={reactionsElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="please enter tags using space"
            ref={tagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
