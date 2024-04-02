// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYrG2xaQmEv8tZkM49dkhaotyzxwvhRCE",
  authDomain: "plant-site-ccb3a.firebaseapp.com",
  projectId: "plant-site-ccb3a",
  storageBucket: "plant-site-ccb3a.appspot.com",
  messagingSenderId: "617408397316",
  appId: "1:617408397316:web:9fa00e22afceaf0e9b7551",
  measurementId: "G-PBE1JSHXGC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
