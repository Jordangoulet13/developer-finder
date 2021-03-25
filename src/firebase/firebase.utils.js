import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2OOPaDdgIyChz3ut2_fHeNSbpOuCm3Rg",
  authDomain: "dev-finder-881c2.firebaseapp.com",
  projectId: "dev-finder-881c2",
  storageBucket: "dev-finder-881c2.appspot.com",
  messagingSenderId: "502515535082",
  appId: "1:502515535082:web:493de6b7dcef237facdb93",
  measurementId: "G-VP62K4FH8K",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
