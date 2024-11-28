import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const users = useAppSelector(selectAllUsers);
  const renderUsers = users.map((user) => (
    <div className="text-white block-inline " key={user.id}>
      <h2 className="bg-cyan-900 text-xl py-2 px-6 rounded-xl ">
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h2>
    </div>
  ));

  return (
    <section className="mt-2">
      <h2 className="text-4xl text-center font-bold p-2 text-white">
        All Users
      </h2>
      <div className=" mt-10 flex  items-center justify-center gap-4">
        {renderUsers}
      </div>
    </section>
  );
};

export default UsersList;
