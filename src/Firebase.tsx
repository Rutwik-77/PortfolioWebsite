import{getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDqESbd9kUYzz96EqmtXBdLZ2PTP9Qt7Z8",
  authDomain: "portfolio-2471e.firebaseapp.com",
  projectId: "portfolio-2471e",
  storageBucket: "portfolio-2471e.firebasestorage.app",
  messagingSenderId: "662408512599",
  appId: "1:662408512599:web:f22856c4000ab71d55cf12",
  measurementId: "G-PRB8VZ9Y21"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);