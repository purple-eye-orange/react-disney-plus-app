// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8VLVD5QIW47OohLX8ivY73wkNfFhAB9Y",
  authDomain: "react-disney-plus-app-2c54c.firebaseapp.com",
  projectId: "react-disney-plus-app-2c54c",
  storageBucket: "react-disney-plus-app-2c54c.appspot.com",
  messagingSenderId: "763443190855",
  appId: "1:763443190855:web:33b0f440d5c4c9b1202562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;