import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserFailure,
  signOutUserSuccess,sigOutUserStart
} from "../redux/user/userSlice.js";

const Profile = () => {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState();
  const dispatch = useDispatch();
  const handleChnage = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(updateUserSuccess);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
   
  };
  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res=await fetch(`/api/user/delete/${currentUser._id}`,{
        method:'DELETE'
      });
      const data=await res.json()
      if(data.success===false){
        dispatch(deleteUserFailure(data.message))
      }
      dispatch(deleteUserSuccess(data))
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  const handleSignOut=async()=>{
    try {
      dispatch(sigOutUserStart())
      const res = await fetch('/api/auth/signout', {
        method: 'GET',
        credentials: 'include', // Important for cookie-based authentication
      });
      
      const data=await res.json()
      if (data.success===false){
        dispatch(signOutUserFailure(data.message))
       
        // return;
      }
      dispatch(signOutUserSuccess(data))
    } catch (error) {
      dispatch(signOutUserFailure(error.message))
      
      console.error(error.message);
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input type="file" ref={fileRef} hidden accept="image/*" />
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-15 w-12 object-cover cursor-pointer self-center mt-2"
          onClick={() => fileRef.current.click()}
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
        <button
          disabled={loading}
          className="bg-slate-600 text-white rounded-lg p-2 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading.." : "Update"}
        </button>
      </form>
      <div className="mt-5 flex justify-between ">
        <span
          onClick={handleDeleteUser}
          className="text-red-700 cursor-pointer"
        >
          Delete account
        </span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
      <p className="text-red-700 mt-5">{error ? error : ""}</p>
      <p className="text-green-700 mt-5">
        {updateSuccess ? "User is successfully updated" : ""}
      </p>
    </div>
  );
};

export default Profile;
