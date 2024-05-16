// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2HytfvP-T6SlHdYpO6fEJL6OfJywU-F4",
  authDomain: "assignment-11-volunteer.firebaseapp.com",
  projectId: "assignment-11-volunteer",
  storageBucket: "assignment-11-volunteer.appspot.com",
  messagingSenderId: "1076819457075",
  appId: "1:1076819457075:web:c6aa71503a32df132e5f46"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;