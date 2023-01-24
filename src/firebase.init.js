 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaIhMlKNjW8Jg7qLJjdRD7sp4sSr9f4bA",
  authDomain: "photographer-hazrat.firebaseapp.com",
  projectId: "photographer-hazrat",
  storageBucket: "photographer-hazrat.appspot.com",
  messagingSenderId: "991451587797",
  appId: "1:991451587797:web:3a04bbd2f30317a3f1ae5c",
  measurementId: "G-WH1MQTN1W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;