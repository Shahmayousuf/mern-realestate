// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4e4f0.firebaseapp.com",
  projectId: "mern-estate-4e4f0",
  storageBucket: "mern-estate-4e4f0.appspot.com",
  messagingSenderId: "214630899410",
  appId: "1:214630899410:web:77167ef72ef2cc1c2c170b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);