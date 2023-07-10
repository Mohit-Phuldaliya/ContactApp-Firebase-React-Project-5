// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEtroCxs0r3b26sNsP26e2t6kD23wsjKs",
  authDomain: "contact-app-d72a9.firebaseapp.com",
  projectId: "contact-app-d72a9",
  storageBucket: "contact-app-d72a9.appspot.com",
  messagingSenderId: "623694891816",
  appId: "1:623694891816:web:b99cc45548b603a093de1d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
