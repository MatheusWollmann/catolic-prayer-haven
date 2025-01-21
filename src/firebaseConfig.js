import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBve3W5y_N-aAGO0cjNWBzj1NxQWiE7VBA",
  authDomain: "prayers-site.firebaseapp.com",
  projectId: "prayers-site",
  storageBucket: "prayers-site.firebasestorage.app",
  messagingSenderId: "833243717093",
  appId: "1:833243717093:web:e09cd340ba770fe4b8e30c",
  measurementId: "G-M2N08DX42K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Adicionar provedores de autenticação
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const twitterProvider = new TwitterAuthProvider();
