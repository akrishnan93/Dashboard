// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATcvpoKChxYvuFqiFc1JjXlPvU73ionvQ",
  authDomain: "dashboard-auth-57074.firebaseapp.com",
  projectId: "dashboard-auth-57074",
  storageBucket: "dashboard-auth-57074.appspot.com",
  messagingSenderId: "57971145579",
  appId: "1:57971145579:web:e526620cf7c1bcf20a2a2e"
};

let app;

// Initialize Firebase
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
 }else {
    app = firebase.app(); // if already initialized, use that one
 }

 const auth = firebase.auth()
 export { auth };

