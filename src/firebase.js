// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIZfnYM9sk755Yx7pzVVjGUpIiL2WqabU",
  authDomain: "agile-board-25737.firebaseapp.com",
  projectId: "agile-board-25737",
  storageBucket: "agile-board-25737.appspot.com",
  messagingSenderId: "22138419790",
  appId: "1:22138419790:web:68cf49c39881cb3ae0211f",
  measurementId: "G-7G3LS17980"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);