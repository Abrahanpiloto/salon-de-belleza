// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt2m2fH9b4zM8o7ET6MXyYk_uwWyj-c6c",
  authDomain: "citas-salon-de-belleza-33e5b.firebaseapp.com",
  projectId: "citas-salon-de-belleza-33e5b",
  storageBucket: "citas-salon-de-belleza-33e5b.firebasestorage.app",
  messagingSenderId: "264872146546",
  appId: "1:264872146546:web:3070ea39be9d89ec1974eb",
  measurementId: "G-VNSFQ3CQZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);