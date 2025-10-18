// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5-p4s4MQNpAqvS18-iax9ia8kGNMFPs0",
  authDomain: "aiflix-93575.firebaseapp.com",
  projectId: "aiflix-93575",
  storageBucket: "aiflix-93575.firebasestorage.app",
  messagingSenderId: "185544733273",
  appId: "1:185544733273:web:7f80c5214991b33491f748",
  measurementId: "G-3X23HC3L4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
