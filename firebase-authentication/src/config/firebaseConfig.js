import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUnW5N4Y4yTwHRsy6U7IIX4gVCS0TbgI4",
  authDomain: "todo-be0fa.firebaseapp.com",
  projectId: "todo-be0fa",
  storageBucket: "todo-be0fa.appspot.com",
  messagingSenderId: "273070228565",
  appId: "1:273070228565:web:027344ce0573dc6ade40dc",
  measurementId: "G-TXMR2WLD2Z"
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, app as default };
