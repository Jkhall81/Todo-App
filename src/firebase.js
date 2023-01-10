// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9KdKmLPmMVg0SVfVufAIqXr-NygdoAmo",
  authDomain: "todo-app-aa905.firebaseapp.com",
  projectId: "todo-app-aa905",
  storageBucket: "todo-app-aa905.appspot.com",
  messagingSenderId: "539997965830",
  appId: "1:539997965830:web:b717617f30fa3e6663bd87",
  measurementId: "G-V96F5JP4EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
