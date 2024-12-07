import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "reactchatg.firebaseapp.com",
  projectId: "reactchatg",
  storageBucket: "reactchatg.firebasestorage.app",
  messagingSenderId: "1048526552474",
  appId: "1:1048526552474:web:5cfdea6e60c5e55f570e23"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
