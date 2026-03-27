// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 Apna Firebase config paste karo
const firebaseConfig = {
  apiKey: "AIzaSyBeA235ALQK-yngFZOJuPFgMXBzUwVVwIo",
  authDomain: "car-safety-11c3a.firebaseapp.com",
  projectId: "car-safety-11c3a",
  storageBucket: "car-safety-11c3a.firebasestorage.app",
  messagingSenderId: "325705492469",
  appId: "1:325705492469:web:e7291ae9e3350e162022bc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);