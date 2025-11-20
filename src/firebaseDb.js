// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD1v7CghydB-uFg7oMZuh8qdzHZ-Ztb69E",
    authDomain: "qausartodolist.firebaseapp.com",
    projectId: "qausartodolist",
    storageBucket: "qausartodolist.firebasestorage.app",
    messagingSenderId: "677792354120",
    appId: "1:677792354120:web:1d5de8542fc945f4f06d7d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db;
