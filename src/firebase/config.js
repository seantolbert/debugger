import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApJYDt51QkXWnauCz7LFt75F9DCLEF3Mg",
  authDomain: "debugger-beb40.firebaseapp.com",
  projectId: "debugger-beb40",
  storageBucket: "debugger-beb40.appspot.com",
  messagingSenderId: "710120237660",
  appId: "1:710120237660:web:7760218189947052201499",
  measurementId: "G-QGYHMS27TH",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
