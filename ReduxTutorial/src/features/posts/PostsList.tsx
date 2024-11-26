import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";
const PostsList = () => {
  // Select the 'state.posts' value from the store into the component
  const posts = useAppSelector(selectAllPosts);

  // Render Post List
  const renderPosts = posts.map((post) => (
    <article
      className=" border-2 border-black mt-5 py-3 px-5 rounded-xl max-w-[600px] mx-auto bg-cyan-900/80 text-white text-center"
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
      <h2 className="text-4xl text-center font-bold p-2 text-white">Posts</h2>
      <div className="">{renderPosts}</div>
    </div>
  );
};

export default PostsList;
