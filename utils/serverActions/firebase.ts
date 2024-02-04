import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9TX7cXyO-S1P29deL1eOneu9cAQAvTWo",
  authDomain: "edrink-vendor.firebaseapp.com",
  projectId: "edrink-vendor",
  storageBucket: "edrink-vendor.appspot.com",
  messagingSenderId: "54011093755",
  appId: "1:54011093755:web:475978c195c7b25656065e",
  measurementId: "G-LRCCWNVJ7N",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
