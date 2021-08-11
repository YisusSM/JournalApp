import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyACGpmJhGsNDKtOOdj28LBH5U8tBcj1UKk",
  authDomain: "react-journal-ae31e.firebaseapp.com",
  projectId: "react-journal-ae31e",
  storageBucket: "react-journal-ae31e.appspot.com",
  messagingSenderId: "903833912676",
  appId: "1:903833912676:web:cf0825fe581df69e792671"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}