import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCnwpBJNFwxoP6KXFl2cCYvZ-bD9Gbgdg", 
  authDomain: "quikchat-64103.firebaseapp.com",
  projectId: "quikchat-64103",
  storageBucket: "quikchat-64103.appspot.com",
  messagingSenderId: "705993822419",
  appId: "1:705993822419:web:a25a54b198f01710fd0426",
  measurementId: "G-6WE406RJTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);