import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  //   If do not the post of that id!
  if (!post) {
    return (
      <section>
        <h2>We don not have such post! 😔</h2>
      </section>
    );
  }
  return (
    <section>
      <article
        className=" py-3 px-5  text-center bg-cyan-900/80 text-white"
        key={post.id}
      >
        <h3 className="font-bold text-3xl">{post.title}</h3>
        <p className="my-4 italic text-xl">{post.content.substring(0, 100)}</p>
      </article>
    </section>
  );
};

export default SinglePostPage;
