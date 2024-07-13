// src/firebaseConfig.ts

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPMTdOKRNAj9ug6erx7ValT8pMJUWW6_Y",
    authDomain: "venture-bot-cecb7.firebaseapp.com",
    projectId: "venture-bot-cecb7",
    storageBucket: "venture-bot-cecb7.appspot.com",
    messagingSenderId: "558330279519",
    appId: "1:558330279519:web:00636fa8ec2ad45e9a4dea",
    measurementId: "G-S1GH07RS83"
  };

// Initialize Firebase
// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };