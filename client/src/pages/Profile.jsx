import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const fileRef=useRef(null)
  const { currentUser } = useSelector((state) => state.user);
  const [formData,setFormData]=useState({})
  const handleChnage=(e)=>{
    setFormData({...formData,[e.target.id]: e.target.value})
    console.log('====================================');
    console.log(formData);
    console.log('====================================');
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold my-7">Profile</h1>
      <form className="flex flex-col gap-5">
        <input type="file" ref={fileRef} hidden accept="image/*"/>
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-15 w-12 object-cover cursor-pointer self-center mt-2"
          onClick={()=>fileRef.current.click()}
        ></img>
        <input
          type="text"
          placeholder="username"
          id="username"
          defaultValue={currentUser.username}
          className="border  rounded-lg p-2"
          onChange={handleChnage}

        ></input>
        <input
          type="text"
          placeholder="email"
          id="email"
          defaultValue={currentUser.email}
          className="border  rounded-lg p-2"
          onChange={handleChnage}

        ></input>
        <input
          type="password"
          placeholder="password"
          id="password"
          className=" border rounded-lg p-2"
          onChange={handleChnage}
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
