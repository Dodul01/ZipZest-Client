import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEuJF9_IP6u3ah9qRT4hq60QxZNFeQ1Zg",
  authDomain: "zipzest-auth.firebaseapp.com",
  projectId: "zipzest-auth",
  storageBucket: "zipzest-auth.appspot.com",
  messagingSenderId: "797386914162",
  appId: "1:797386914162:web:ae5d668c00442a451a45eb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;