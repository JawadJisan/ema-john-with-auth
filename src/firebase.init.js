// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe8kyzJYk5wiwxJkXJXIlSCEKG5dkxedg",
  authDomain: "ema-john-simple-4c074.firebaseapp.com",
  projectId: "ema-john-simple-4c074",
  storageBucket: "ema-john-simple-4c074.appspot.com",
  messagingSenderId: "462218549417",
  appId: "1:462218549417:web:2a19696e7bb7d99843f1b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;