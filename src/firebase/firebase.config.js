import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMl3V-btye3xPE96L003DPnlzkw5poPho",
  authDomain: "pet-care-client.firebaseapp.com",
  projectId: "pet-care-client",
  storageBucket: "pet-care-client.appspot.com",
  messagingSenderId: "700978432580",
  appId: "1:700978432580:web:15af94dbcfa2db0bacca11"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth