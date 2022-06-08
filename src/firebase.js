
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYRPUkgbYLeAA6hIgyXpTsPPwDlQNiHkY",
  authDomain: "ultimate-two-choices.firebaseapp.com",
  projectId: "ultimate-two-choices",
  storageBucket: "ultimate-two-choices.appspot.com",
  messagingSenderId: "265935137789",
  appId: "1:265935137789:web:0e1f3f58cb831b2cee0794"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;