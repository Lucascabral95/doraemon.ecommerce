import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1WN45kWK3ntNajfeFsXcijK8atu61l74",
  authDomain: "ecommerce-doraemon.firebaseapp.com",
  projectId: "ecommerce-doraemon",
  storageBucket: "ecommerce-doraemon.appspot.com",
  messagingSenderId: "693925738422",
  appId: "1:693925738422:web:f885d3356c13aeee75b317",
  measurementId: "G-R1ME42QMHQ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);