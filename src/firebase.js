// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvgyHRrwPaplVvhwUlo55j_ljjAckQ7Ec",
  authDomain: "fridge-manager-5cde4.firebaseapp.com",
  databaseURL: "https://fridge-manager-5cde4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fridge-manager-5cde4",
  storageBucket: "fridge-manager-5cde4.appspot.com",
  messagingSenderId: "357350905134",
  appId: "1:357350905134:web:b1026bcb9881a9c86096bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);