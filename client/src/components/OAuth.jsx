import React from "react";
import {app} from '../firebase';
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth'
const OAuth = () => {
     const handleGoogleClick=async()=>{
        try {
            const provider=new GoogleAuthProvider()
            const auth=getAuth(app)

            const result=await signInWithPopup(auth,provider)
            console.log(result);
            
        } catch (error) {
            console.log("could'nt sign in with google", error);
            
        }
     }
  return (
    <button 
    type="button"
    onClick={handleGoogleClick} className="bg-red-800 mt-5 rounded-lg min-w-full text-white p-3 uppercase hover:opacity-90 disabled:opacity-80 ">
      continue with google
    </button>
  );
};

export default OAuth;
