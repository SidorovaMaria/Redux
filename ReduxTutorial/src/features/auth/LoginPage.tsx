import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAllUsers } from "../users/usersSlice";
import { userLoggedIn } from "./authSlice";

interface LoginPageFormFields extends HTMLFormControlsCollection {
  username: HTMLSelectElement;
}
interface LoginPageFormElements extends HTMLFormElement {
  readonly elements: LoginPageFormFields;
}

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<LoginPageFormElements>) => {
    e.preventDefault();
    const username = e.currentTarget.elements.username.value;
    dispatch(userLoggedIn(username));
    navigate("/posts");
  };
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="max-w-[80%] mx-auto text-center my-5 text-white flex flex-col justify-center  h-[60vh]">
      <h2 className="font-bold text-xl my-3">Welcome to Redux Totorial</h2>
      <h3 className="m-0 text-lg text-amber-400">Please login to see posts</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Your Username:</label>
        <select id="username" name="username" required>
          <option value=""></option>
          {usersOptions}
        </select>
        <button className=" bg-teal-950/80 text-white font-medium py-3 px-6 mx-auto text-center mt-3 rounded-xl">
          Log In
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
