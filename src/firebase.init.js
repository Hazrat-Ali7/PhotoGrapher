// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX-QBvCxFEvItGKObsWnIj6c0IGfoqyNU",
  authDomain: "fir-assignment-10-7ed92.firebaseapp.com",
  projectId: "fir-assignment-10-7ed92",
  storageBucket: "fir-assignment-10-7ed92.appspot.com",
  messagingSenderId: "227700937655",
  appId: "1:227700937655:web:29adc435cf53f9bbab4e32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;