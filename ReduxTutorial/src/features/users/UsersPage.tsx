import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUserById } from "./usersSlice";
import { selectPostByUser } from "../posts/postsSlice";
import PostAuthor from "../posts/PostAuthor";
import { ReactionButtons } from "../posts/ReactionsButtons";
import TimeAgo from "../../components/TimeAgo";

const UsersPage = () => {
  const { userId } = useParams();
  const user = useAppSelector((state) => selectUserById(state, userId!));
  const postsByUser = useAppSelector((state) =>
    selectPostByUser(state, userId!)
  );

  if (!user) {
    return (
      <section className="flex flex-col justify-center items-center h-[70vh]">
        <h2 className=" text-white text-center font-bold text-3xl">
          We do not have such User <br></br>
        </h2>
        <p className="text-[5rem]">😔</p>
      </section>
    );
  }
  const PostTiles = postsByUser.map((post) => (
    <div key={post.id}>
      <article
        className=" border-2 border-black mt-5 py-3 px-5 rounded-xl max-w-[600px] mx-auto bg-cyan-900/80 text-white relative "
        key={post.id}
      >
        <Link to={`/posts/${post.id}`}>
          <h3 className="font-bold text-lg capitalize">{post.title}</h3>
          <div className="absolute top-[50%] -translate-y-1/2 right-5 text-right text-amber-300  max-w-[30%] italic">
            <TimeAgo timestamp={post.date} />
          </div>

          <p className="my-4 italic max-w-[60%]">
            {post.content.substring(0, 40)}...
          </p>
        </Link>
      </article>
    </div>
  ));

  return (
    <div className="">
      <h2 className="text-4xl text-center font-bold p-2 text-white">
        Posts by <PostAuthor userId={user.id} breakWords={false} />
      </h2>
      <div className="">{PostTiles}</div>
    </div>
  );
};

export default UsersPage;
