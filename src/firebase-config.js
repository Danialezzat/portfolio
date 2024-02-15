import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBR9JOMqy_BI07vkF4ADYDXnBjA-txpO8k",
  authDomain: "my-blog-125e8.firebaseapp.com",
  projectId: "my-blog-125e8",
  storageBucket: "my-blog-125e8.appspot.com",
  messagingSenderId: "542435114402",
  appId: "1:542435114402:web:62e5ea36fe14eae16cc6fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
