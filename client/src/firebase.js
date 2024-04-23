// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-16881.firebaseapp.com",
  projectId: "mern-blog-app-16881",
  storageBucket: 'mern-blog-16881.appspot.com',
  messagingSenderId: '396481464868',
  appId: '1:396481464868:web:99ab93f3ca8be82ce2e6b1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
