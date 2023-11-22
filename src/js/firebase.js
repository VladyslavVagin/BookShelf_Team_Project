import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDGGs_M72U47x_8OPp1fXlulwAc_R9sWFw",
  authDomain: "bookshelf-vladyslav-pr.firebaseapp.com",
  databaseURL: "https://bookshelf-vladyslav-pr-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookshelf-vladyslav-pr",
  storageBucket: "bookshelf-vladyslav-pr.appspot.com",
  messagingSenderId: "486061422566",
  appId: "1:486061422566:web:65c06a043c706983c1c827",
};
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);