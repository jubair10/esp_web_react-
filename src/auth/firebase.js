// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyATLck7bu6T8VKEamSiBe1WQogeb2lf1mI",
  authDomain: "project-aurixeon.firebaseapp.com",
  databaseURL: "https://project-aurixeon-default-rtdb.firebaseio.com",
  projectId: "project-aurixeon",
  storageBucket: "project-aurixeon.appspot.com",
  messagingSenderId: "1046166625004",
  appId: "1:1046166625004:web:ddf00feb706931cfcb63c9",
  measurementId: "G-CNE9P34WPM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, update };
