import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAF90MdtslLm4FHZjCJKWeWVLXKJ9G_m0U",
  authDomain: "portfolio-selvakumar.firebaseapp.com",
  projectId: "portfolio-selvakumar",
  storageBucket: "portfolio-selvakumar.firebasestorage.app",
  messagingSenderId: "15214035440",
  appId: "1:15214035440:web:92c10e87e28e85803c5d35",
  measurementId: "G-9V5YBPMFNR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth