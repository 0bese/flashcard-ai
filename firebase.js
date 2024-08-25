// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9GKcQRs2LXeKUyTcdUOR0I8Ne3cDIVnw",
  authDomain: "flashcards-ai-605ea.firebaseapp.com",
  projectId: "flashcards-ai-605ea",
  storageBucket: "flashcards-ai-605ea.appspot.com",
  messagingSenderId: "749839889591",
  appId: "1:749839889591:web:7919d2687c2a5a762dc932",
  measurementId: "G-9VCF4Y0LV7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
