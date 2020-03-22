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
  const collectionRef = firestore.collection("users");

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();

  console.log({ collecntions: collectionSnapshot.docs.map(doc => doc.data()) });

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

//to add data shop data to firebase
// export const addCollectionAndDocuments = async (
//   collectionkey,
//   objectsToadd
// ) => {
//   const collectionRef = firestore.collection(collectionkey);
//   console.log(collectionRef);
//   const batch = firestore.batch();
//   objectsToadd.forEach(element => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, element);
//     console.log(newDocRef, element);
//   });
//   return await batch.commit();
// };
// =================================================================

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      //encodeURI : convert the string to as a valid uniform resource identifier
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
  // console.log(transformedCollection);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
