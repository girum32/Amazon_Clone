import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYsM7_05606VBLKYPfSeSHj81rvkbNN_U",
    authDomain: "clone-2cb36.firebaseapp.com",
    projectId: "clone-2cb36",
    storageBucket: "clone-2cb36.appspot.com",
    messagingSenderId: "556687199925",
    appId: "1:556687199925:web:85b776f56f73f1c1a278fc",
    measurementId: "G-2MZ48YY6B5"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};