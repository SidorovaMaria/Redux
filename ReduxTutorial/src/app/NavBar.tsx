import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import { selectCurrentUser } from "../features/users/usersSlice";
import { userLoggedOut } from "../features/auth/authSlice";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const isLoggedIn = !!user;
  let navContent: React.ReactNode = null;
  if (isLoggedIn) {
    const onLogoutClicked = () => {
      dispatch(userLoggedOut());
    };
    navContent = (
      <div>
        <div className=" text-white font-medium hover:underline hover:scale-110">
          <div className="flex justify-center items-center gap-10">
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
          </div>
        </div>
        <div className="text-white flex flex-col absolute top-4 right-10 gap-4">
          <h3 className="tracking-widest">
            Welcome,
            <span className="text-amber-400 font-extrabold text-xl">
              {user!.name}
            </span>
            !
          </h3>
          <button
            className="  text-white font-medium py-2 px-4  mx-auto text-center rounded-[1rem] text-sm bg-[#436e8c] border-2 border-transparent hover:bg-transparent hover:border-white"
            onClick={onLogoutClicked}
          >
            Log Out?
          </button>
        </div>
      </div>
    );
  }

  return (
    <nav className="flex p-4 bg-teal-950">
      <section className="w-full text-center">
        <h1 className="my-4 mx-0 text-3xl tracking-widest text-white font-bold ">
          Redux Essentials Example
        </h1>
        {navContent}
      </section>
    </nav>
  );
};
