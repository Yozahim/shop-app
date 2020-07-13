import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9kLXNKw3DfEvnoblYJ7NbgBqWknr_EE4",
  authDomain: "shop-db-64523.firebaseapp.com",
  databaseURL: "https://shop-db-64523.firebaseio.com",
  projectId: "shop-db-64523",
  storageBucket: "shop-db-64523.appspot.com",
  messagingSenderId: "7901154646",
  appId: "1:7901154646:web:ed5293b9d22354b245daf7",
  measurementId: "G-DJJ5JBGWHN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
