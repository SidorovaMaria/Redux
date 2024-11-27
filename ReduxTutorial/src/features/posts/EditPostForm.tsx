import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { postUpdated, selectPostById } from "./postsSlice";

interface EditPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
}
interface EditPostFormElements extends HTMLFormElement {
  readonly elements: EditPostFormFields;
}

const EditPostForm = () => {
  const { postId } = useParams();
  const post = useAppSelector((state) => selectPostById(state, postId!));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  if (!post) {
    return (
      <section className="flex flex-col justify-center items-center h-[70vh]">
        <h2 className=" text-white text-center font-bold text-3xl">
          We don not have such post! <br></br>
        </h2>
        <p className="text-[5rem]">😔</p>
      </section>
    );
  }
  const onSavePostClicked = (e: React.FormEvent<EditPostFormElements>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;
    if (title && content) {
      dispatch(postUpdated({ id: post.id, title, content }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section className=" w-full py-4 px-10 text-white  ">
      <h2 className="text-2xl text-center font-bold pt-4 ">Edit Post</h2>
      <form
        onSubmit={onSavePostClicked}
        className="flex flex-col justify-center items-center max-w-[50%] mx-auto"
      >
        {/* Title */}
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue={post.title} required />
        {/* Content */}
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue={post.content}
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

export default EditPostForm;
