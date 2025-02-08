// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv8zLoj9bqM70kDeY7pghrBtOHWrMvRME",
    authDomain: "zindex-shop.firebaseapp.com",
    projectId: "zindex-shop",
    storageBucket: "zindex-shop.firebasestorage.app",
    messagingSenderId: "78098187776",
    appId: "1:78098187776:web:b72dee9fe99e6dd2333ae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app