import {getAuth} from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5rcnOEEegJSTxo7T1mLZsoS3pfLVLOug",
  authDomain: "netflix-gpt-f3368.firebaseapp.com",
  projectId: "netflix-gpt-f3368",
  storageBucket: "netflix-gpt-f3368.appspot.com",
  messagingSenderId: "613113621971",
  appId: "1:613113621971:web:441f6f2a1c0bdf90709326",
  measurementId: "G-EFPTQ3M0BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();