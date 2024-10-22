import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGAAYzcL7PTR2CB4HjcMaNcvkux508T7Q",
  authDomain: "sttable-adfc6.firebaseapp.com",
  projectId: "sttable-adfc6",
  storageBucket: "sttable-adfc6.appspot.com",
  messagingSenderId: "761320963230",
  appId: "1:761320963230:web:5e33a6f1c20adbc1620f8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
