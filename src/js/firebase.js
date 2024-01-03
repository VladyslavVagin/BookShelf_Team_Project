import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBO9cjVBOhaLawHt-cSmC-d-k4SEv7vhoE",
  authDomain: "books-shelf-12team.firebaseapp.com",
  databaseURL:  "https://books-shelf-12team-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "books-shelf-12team",
  storageBucket: "books-shelf-12team.appspot.com",
  messagingSenderId: "8408632477",
  appId: "1:8408632477:web:37da13216b9fc869039874",
  measurementId: "G-4LLZCMXJK5"
};
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);