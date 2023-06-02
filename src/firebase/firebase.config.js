// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBHnqizQuwuwwSB4K94-S1oFqTOR8GI6Q",
  authDomain: "auth-context-firebase-f3224.firebaseapp.com",
  projectId: "auth-context-firebase-f3224",
  storageBucket: "auth-context-firebase-f3224.appspot.com",
  messagingSenderId: "282469726235",
  appId: "1:282469726235:web:0659b8e8b848b3fc6620be",
  measurementId: "G-DLJY3GSZX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;