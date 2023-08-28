 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB8ybiDnauhBk2Y1183U9KS9ov9LMpQrKA",
   authDomain: "boredtunellers.firebaseapp.com",
   projectId: "boredtunellers",
   storageBucket: "boredtunellers.appspot.com",
   messagingSenderId: "546657586979",
   appId: "1:546657586979:web:91d65798c561fcf1490696",
   measurementId: "G-PCVH6R6J88"
 };
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 const db = getFirestore(app);

 export {db};