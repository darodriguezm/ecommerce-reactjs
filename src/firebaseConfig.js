// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Documentación: https://firebase.google.com/docs/firestore/query-data/get-data#web-version-9


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq1Er3HcFuUxn4-bWboXefh2LlboQucZ0",
  authDomain: "ecommerce-react-37adb.firebaseapp.com",
  projectId: "ecommerce-react-37adb",
  storageBucket: "ecommerce-react-37adb.appspot.com",
  messagingSenderId: "647240356263",
  appId: "1:647240356263:web:ea9da52d92c545ad052682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;