import React from "react";
import { Link } from "react-router-dom";

const LoginError = () => {
  return (
    <section className="max-w-[80%] mx-auto text-center my-5 text-white flex flex-col items-center justify-center h-[60vh]">
      <h2 className="font-bold text-3xl my-3">
        Please Login First to See the Posts{" "}
      </h2>
      <Link to="/">
        <button className=" bg-teal-950/80 text-white font-medium py-3 px-6 mx-auto text-center mt-3 rounded-xl">
          Back to LogIn Page
        </button>
      </Link>
    </section>
  );
};

export default LoginError;
