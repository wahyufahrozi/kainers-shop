import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCD0Ah4u8hC-HQrt4-Tsj4LLYw63XmlEzw",
  authDomain: "kainers-db.firebaseapp.com",
  databaseURL: "https://kainers-db.firebaseio.com",
  projectId: "kainers-db",
  storageBucket: "kainers-db.appspot.com",
  messagingSenderId: "644124450337",
  appId: "1:644124450337:web:120620f4db2c54457f0d60",
  measurementId: "G-ZVWX9F3RHW"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
