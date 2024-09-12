import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold my-7">Profile</h1>
      <form className="flex flex-col gap-5">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-23 w-23 object-cover cursor-pointer self-center mt-2"
        ></img>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border  rounded-lg p-2"
        ></input>
        <input
          type="text"
          placeholder="email"
          id="email"
          className="border  rounded-lg p-2"
        ></input>
        <input
          type="text"
          placeholder="password"
          id="password"
          className=" border rounded-lg p-2"
        ></input>
        <button className="bg-slate-600 text-white rounded-lg p-2 uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="mt-5 flex justify-between ">
     <span className="text-red-700 cursor-pointer">Delete account</span>
       <span className="text-red-700 cursor-pointer">Sign Out</span>
       </div>
    </div>
  );
};

export default Profile;
