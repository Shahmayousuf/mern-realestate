import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md  ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-amber-800">Dream</span>
          <span className="text-neutral-600">Land</span>
        </h1>
        <form
          action=""
          className="bg-slate-100 p-2 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="hover:underline hidden sm:inline text-slate-700">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:underline hidden sm:inline   text-slate-700">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img src={currentUser.avatar} alt='profile'className="rounded-full h-8 w-8  object-cover"></img>
            ) : (
              <li className="hover:underline sm:inline  text-slate-700">
                SignIn
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
