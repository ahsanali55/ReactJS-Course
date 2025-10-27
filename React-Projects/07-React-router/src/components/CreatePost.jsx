import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  

  return (

      <Form className="createPost" method="POST">
        <div className="mb-3">
          <label htmlFor="user_Id" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            id="user_Id"
            placeholder="Your User Id"
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
 
  );
};
                                     // OBJECT
export async function createPostAction(data){
  // getting data from Form through router

  const formData = await data.request.formData();

  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  
  // Post data at the server
  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        postData
      ),
    })
      .then((res) => res.json())
      .then(resObj => { 
        console.log("resObject", resObj)
        // addPost(resObj)
  
  })
      .catch((error) => console.error("Error adding post:", error));

  return redirect('/');
}

export default CreatePost;
