import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { Link } from "react-router-dom";
import {
  fetchPosts,
  selectAllPosts,
  selectPostsError,
  selectPostsStatus,
} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "../../components/TimeAgo";

import { ReactionButtons } from "./ReactionsButtons";
import { useEffect } from "react";
import { Spinner } from "../../components/Spinner";
const PostsList = () => {
  const dispatch = useAppDispatch();
  // Select the 'state.posts' value from the store into the component
  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector(selectPostsStatus);
  const postError = useAppSelector(selectPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  // IF CONTENT IS LOADING!
  let content: React.ReactNode;
  if (postStatus === "pending") {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderedPosts.map((post) => (
      <article
        className=" border-2 border-black mt-5 py-3 px-5 rounded-xl max-w-[600px] mx-auto bg-cyan-900/80 text-white relative "
        key={post.id}
      >
        <Link to={`/posts/${post.id}`}>
          <h3 className="font-bold text-lg capitalize">{post.title}</h3>
          <div className="absolute top-[50%] -translate-y-1/2 right-5 text-right text-amber-300  max-w-[30%] italic">
            <PostAuthor userId={post.user} breakWords={true} />
            <TimeAgo timestamp={post.date} />
          </div>

          <p className="my-4 italic max-w-[60%]">
            {post.content.substring(0, 100)}
          </p>
        </Link>
        <ReactionButtons post={post} />
      </article>
    ));
  } else if (postStatus === "rejected") {
    content = <div className="text-red-900 text-xl font-bold">{postError}</div>;
  }

  // Render Post List

  return (
    <div className="">
      <h2 className="text-4xl text-center font-bold p-2 text-white">Posts</h2>
      <div className="">{content}</div>
    </div>
  );
};

export default PostsList;
