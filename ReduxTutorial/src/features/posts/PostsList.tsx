import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
const PostsList = () => {
  // Select the 'state.posts' value from the store into the component
  const posts = useAppSelector((state) => state.posts);

  // Render Post List
  const renderPosts = posts.map((post) => (
    <article
      className=" border-2 border-black m-3 mx-10 py-3 px-5 rounded-xl bg-cyan-900/80 text-white"
      key={post.id}
    >
      <h3 className="font-bold text-lg">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="my-4 italic">{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <div className="">
      <h2 className="text-4xl text-center font-bold p-2">Posts</h2>
      {renderPosts}
    </div>
  );
};

export default PostsList;
