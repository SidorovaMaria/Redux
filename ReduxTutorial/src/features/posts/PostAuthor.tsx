import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUserById } from "../users/usersSlice";

interface PostAuthorProps {
  userId: string;
}
const PostAuthor = ({ userId }: PostAuthorProps) => {
  const author = useAppSelector((state) => selectUserById(state, userId));
  return (
    <span className="text-base text-amber-300/90 font-bold tracking-wider text-right">
      By{" "}
      {author?.name?.split(" ").map((part, index) => (
        <React.Fragment key={index}>
          {part}
          <br />
        </React.Fragment>
      )) ?? "Unknown author"}
    </span>
  );
};

export default PostAuthor;
