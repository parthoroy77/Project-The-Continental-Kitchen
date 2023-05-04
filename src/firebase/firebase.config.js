// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcLVpUvRQMUdUXsndw3npmATBdeF5uLFg",
  authDomain: "the-continental-kitchen-ecd8f.firebaseapp.com",
  projectId: "the-continental-kitchen-ecd8f",
  storageBucket: "the-continental-kitchen-ecd8f.appspot.com",
  messagingSenderId: "959003026126",
  appId: "1:959003026126:web:12f4a3ba72c96f528fa69f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;