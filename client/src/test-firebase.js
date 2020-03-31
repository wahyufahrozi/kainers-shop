import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("9oBO7UgHfQt3Zs3KbO3k")
  .collection("cartItems")
  .doc("FSaq4GgPQwFkfAXuyQ9q");
// or
firestore.doc("/users/9oBO7UgHfQt3Zs3KbO3k/cartItems/FSaq4GgPQwFkfAXuyQ9q");
// or
firestore.collection("/users/9oBO7UgHfQt3Zs3KbO3k/cartItems/");
