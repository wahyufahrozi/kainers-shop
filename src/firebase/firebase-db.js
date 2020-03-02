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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
