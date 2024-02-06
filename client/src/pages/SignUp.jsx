import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const[loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const res = await fetch("/api/auth/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.message===false){
      setError(data.message);
      setLoading(true)
      return;
    }
    setLoading(false)
    
    console.log(data);
  };
  console.log(formData);
  return (
    <div className="p-5 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-bold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-2 rounded-lg focus:outline-none"
          id="username"
          onChange={handleChange}
        />
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
          type="submit"
          className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-90 disabled:opacity-80 "
        >
          Sign Up
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
