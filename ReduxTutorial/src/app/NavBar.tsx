import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex p-4 bg-teal-950">
      <section className="w-full text-center">
        <h1 className="my-4 mx-0 text-3xl tracking-widest text-white font-bold ">
          Redux Essentials Example
        </h1>

        <div className=" text-white font-medium hover:underline hover:scale-110">
          <div className="flex justify-center items-center">
            <Link to="/">Posts</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
