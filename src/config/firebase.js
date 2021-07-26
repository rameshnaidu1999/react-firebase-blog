import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2Ksne4uJyAgvKTJuTH3teXycBJpf1tSI",
  authDomain: "react-bootstrap-blog-129bf.firebaseapp.com",
  projectId: "react-bootstrap-blog-129bf",
  storageBucket: "react-bootstrap-blog-129bf.appspot.com",
  messagingSenderId: "733352797508",
  appId: "1:733352797508:web:ccd9fade21f7d2c02d2311",
  measurementId: "G-HHCS7H94EZ",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
