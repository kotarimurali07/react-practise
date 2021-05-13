import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, app as default };
