User
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf7oqPXQ5IE0UQxIDVrmII-S8yNVVOIlE",
  authDomain: "portifolio-4cd00.firebaseapp.com",
  projectId: "portifolio-4cd00",
  storageBucket: "portifolio-4cd00.appspot.com",
  messagingSenderId: "898434844035",
  appId: "1:898434844035:web:14e1d3d3e4caaf5715a2b6",
  measurementId: "G-YMR3B21N1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);