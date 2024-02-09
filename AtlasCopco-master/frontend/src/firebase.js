// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbhBtbYUeYc5wEjGjrEmzQ7XAmg01JBTc",
  authDomain: "atlas-copco-4349c.firebaseapp.com",
  projectId: "atlas-copco-4349c",
  storageBucket: "atlas-copco-4349c.appspot.com",
  messagingSenderId: "1011857279923",
  appId: "1:1011857279923:web:1b8f328835bdefd07a99c6",
  measurementId: "G-7HSSTMVGNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);