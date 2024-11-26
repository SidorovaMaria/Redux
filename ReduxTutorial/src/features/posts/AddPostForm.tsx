import React from "react";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../app/hooks";
import { type Post, postAdded } from "./postsSlice";
// Types of the input fields
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
}
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields;
}

const AddPostForm = () => {
  // get the 'dispatch' method
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
    // Prevent server submission
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;

    dispatch(postAdded(title, content));

    e.currentTarget.reset();
  };

  return (
    <section className=" w-full py-4 px-10 text-white  ">
      <h2 className="text-2xl text-center font-bold pt-4 ">Add a New Post</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center max-w-[50%] mx-auto"
      >
        {/* Title */}
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue="" required />
        {/* Content */}
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue=""
          required
          className="font-normal"
        />
        <button className=" bg-teal-950/80 text-white font-medium py-3 px-6 mx-auto text-center mt-3 rounded-xl">
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
