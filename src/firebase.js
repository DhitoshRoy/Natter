  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyCdQCw-aKgOENI4K546jqr5gRTjRMmclrw",
    authDomain: "hamsafar-e4eab.firebaseapp.com",
    projectId: "hamsafar-e4eab",
    storageBucket: "hamsafar-e4eab.appspot.com",
    messagingSenderId: "762543808328",
    appId: "1:762543808328:web:8300b028611201380b9d7d",
    measurementId: "G-ZT3B0MD11X"
  };
  

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage();
  export const db = getFirestore();