// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXhvAJzF3HWxpNO05S5UFerFOg8XPFM8E",
  authDomain: "crapsconweb.firebaseapp.com",
  databaseURL: "https://crapsconweb-default-rtdb.firebaseio.com",
  projectId: "crapsconweb",
  storageBucket: "crapsconweb.appspot.com",
  messagingSenderId: "233203376997",
  appId: "1:233203376997:web:fb98908864b6b17424f78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    db
}