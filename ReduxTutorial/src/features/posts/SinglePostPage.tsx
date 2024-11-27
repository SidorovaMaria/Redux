import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "../../components/TimeAgo";
import { ReactionButtons } from "./ReactionsButtons";
import { selectCurrentUsername } from "../auth/authSlice";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useAppSelector((state) => selectPostById(state, postId!));
  const currentUsername = useAppSelector(selectCurrentUsername);
  //   If do not the post of that id!
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
  const canEdit = currentUsername === post.user;
  return (
    <section>
      <button className=" box-border fixed top-10 left-10 text-xl text-white bg-white/20 px-4 py-2 rounded-xl hover:bg-white/90 hover:text-cyan-950 active:font-bold">
        <Link to={"/posts"}>&lt; Back to All Posts</Link>
      </button>
      <article
        className=" py-10 px-10  text-center bg-cyan-900/80 text-white relative"
        key={post.id}
      >
        <h3 className="font-bold text-3xl">{post.title}</h3>
        <div className="flex items-center justify-center text-amber-300 font-bold italic">
          <PostAuthor userId={post.user} breakWords={false} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="my-4 italic text-xl">{post.content.substring(0, 100)}</p>
        {canEdit && (
          <Link
            to={`/editPost/${post.id}`}
            className="mt-4 absolute left-10 top-0 bg-cyan-950 px-4 py-2 rounded-xl text-xl hover:bg-transparent border-4 border-transparent hover:border-white active:bg-white/60"
          >
            Edit Post
          </Link>
        )}
        <ReactionButtons post={post} />
      </article>
    </section>
  );
};

export default SinglePostPage;
