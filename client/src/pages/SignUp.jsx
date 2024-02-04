import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="p-5 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-bold my-7">Sign Up</h1>
      <form className="flex flex-col  gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-2 rounded-lg focus:outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="eamil"
          className="border p-2 rounded-lg focus:outline-none"
          id="emal"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-2 rounded-lg focus:outline-none"
          id="password"
        />
        <button className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-90 disabled:opacity-80 ">
          Sign In
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className="text-blue-700 "> Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
