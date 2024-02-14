import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
const SignIn = () => {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      dispatch(signInStart);
      const res = await fetch("/api/auth/signin", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // setLoading(false);
        dispatch(signInFailure(data.message));
        // setError(data.message);

        return;
      }
      // setLoading(false);
      dispatch(signInSuccess(data));
      // setError(null);
      navigate("/");
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-bold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-2 rounded-lg focus:outline-none"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-2 rounded-lg focus:outline-none"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-90 disabled:opacity-80 "
        >
          {loading ? "Loading..." : "SignIn"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700 "> Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
