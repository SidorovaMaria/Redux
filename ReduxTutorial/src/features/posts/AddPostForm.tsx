import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addNewPost } from "./postsSlice";

import { selectCurrentUsername } from "../auth/authSlice";

// Types of the input fields
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
  postAuthor: HTMLSelectElement;
}
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields;
}

const AddPostForm = () => {
  const [addRequestStatus, setAddRequestStatus] = useState<"idle" | "pending">(
    "idle"
  );
  // get the 'dispatch' method
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectCurrentUsername);

  const handleSubmit = async (e: React.FormEvent<AddPostFormElements>) => {
    // Prevent server submission
    e.preventDefault();

    const { elements } = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;
    // const userId = elements.postAuthor.value;
    const form = e.currentTarget;
    try {
      setAddRequestStatus("pending");
      await dispatch(addNewPost({ title, content, user: userId! })).unwrap();
      form.reset();
    } catch (err) {
      console.log("Failed to save the ppst: ", err);
    } finally {
      setAddRequestStatus("idle");
    }

    // dispatch(postAdded(title, content, String(userId)));
    // e.currentTarget.reset();
  };

  // const usersOptions = users.map((user) => (
  //   <option key={user.id} value={user.id}>
  //     {user.name}
  //   </option>
  // ));

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
        {/* Author */}
        {/* <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" name="postAuthor" required>
          <option value=""></option>
          {usersOptions}
        </select> */}
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
