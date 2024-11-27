import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "../../components/TimeAgo";
const PostsList = () => {
  // Select the 'state.posts' value from the store into the component
  const posts = useAppSelector(selectAllPosts);

  // Render Post List
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderPosts = orderedPosts.map((post) => (
    <Link to={`/posts/${post.id}`}>
      <article
        className=" border-2 border-black mt-5 py-3 px-5 rounded-xl max-w-[600px] mx-auto bg-cyan-900/80 text-white relative"
        key={post.id}
      >
        <h3 className="font-bold text-lg">{post.title}</h3>
        <div className="absolute top-[50%] -translate-y-1/2 right-5 text-right text-amber-300  italic">
          <PostAuthor userId={post.user} breakWords={true} />
          <TimeAgo timestamp={post.date} />
        </div>

        <p className="my-4 italic">{post.content.substring(0, 100)}</p>
      </article>
    </Link>
  ));

  return (
    <div className="">
      <h2 className="text-4xl text-center font-bold p-2 text-white">Posts</h2>
      <div className="">{renderPosts}</div>
    </div>
  );
};

export default PostsList;
