// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // nos traemos esta funcion para poder usar firestore en nuestro proyecto

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVGsvBdL25PJupnDV1JGXVlkTLyk7znAM",
  authDomain: "ecommerce-react-entrega-final.firebaseapp.com",
  projectId: "ecommerce-react-entrega-final",
  storageBucket: "ecommerce-react-entrega-final.appspot.com",
  messagingSenderId: "147120521306",
  appId: "1:147120521306:web:b0a0cf90b3884e95011863",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // inicializamos y exportamos firestore en la tienda
