import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCftjvWvNSsN09te7qNGPsN-Uq91ZSdnOA",
  authDomain: "notes-share-c48ba.firebaseapp.com",
  projectId: "notes-share-c48ba",
  storageBucket: "notes-share-c48ba.appspot.com",
  messagingSenderId: "499389204108",
  appId: "1:499389204108:web:ebc26c01cf6278b6f4dda9",
  measurementId: "G-YK9V2G6YX7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
