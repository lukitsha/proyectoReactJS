import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpxB_-3p_PANQ_8PHmHwZsTbgD4S9PuB4",
  authDomain: "reactjs-gaido.firebaseapp.com",
  projectId: "reactjs-gaido",
  storageBucket: "reactjs-gaido.appspot.com",
  messagingSenderId: "225743856712",
  appId: "1:225743856712:web:5315ed5fec9405fac1647d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)