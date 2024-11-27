import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUserById } from "../users/usersSlice";
import TimeAgo from "../../components/TimeAgo";

interface PostAuthorProps {
  userId: string;
  breakWords: boolean;
}
const PostAuthor = ({ userId, breakWords }: PostAuthorProps) => {
  const author = useAppSelector((state) => selectUserById(state, userId));
  if (breakWords) {
    return (
      <span className="text-base text-amber-300/90 font-bold tracking-wider text-right ">
        By{" "}
        {author?.name?.split(" ").map((part, index) => (
          <React.Fragment key={index}>
            {part}
            <br />
          </React.Fragment>
        )) ?? "Unknown author"}
      </span>
    );
  } else {
    return (
      <p className=" static text-amber-300/90 font-bold py-3 text-lg">
        by {author?.name ?? "Unknown author"}
      </p>
    );
  }
};

export default PostAuthor;
{
  /*  */
}
