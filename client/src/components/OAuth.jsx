import React from "react";
import { app } from "../firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";


const OAuth = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();

      dispatch(signInSuccess(data));
      navigate('/')
    } catch (error) {
      console.log("couldn't sign in with google", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-800 mt-5 rounded-lg min-w-full text-white p-3 uppercase hover:opacity-90 disabled:opacity-80 "
    >
      continue with google
    </button>
  );
};

export default OAuth;
