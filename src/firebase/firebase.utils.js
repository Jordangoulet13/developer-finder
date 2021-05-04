import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB2OOPaDdgIyChz3ut2_fHeNSbpOuCm3Rg",
  authDomain: "dev-finder-881c2.firebaseapp.com",
  projectId: "dev-finder-881c2",
  storageBucket: "dev-finder-881c2.appspot.com",
  messagingSenderId: "502515535082",
  appId: "1:502515535082:web:493de6b7dcef237facdb93",
  measurementId: "G-VP62K4FH8K",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const writeUserData = (
  userAuth,
  firstName,
  lastName,
  location,
  title,
  about,
  skills,
  portfolioLink
) => {
  const userRef = firestore.doc(`users/${userAuth}`);
  userRef.update({
    firstName: firstName,
    lastName: lastName,
    location: location,
    title: title,
    about: about,
    skills: skills,
    portfolioLink: portfolioLink,
  });
};

export const writeUserImage = (userAuth, image) => {
  const userRef = firestore.doc(`users/${userAuth}`);
  userRef.update({
    image: image,
  });
  console.log(image);
};

export const getUserSnapshot = (userID) => {
  const userRef = firestore.collection("users").doc(userID);
  const snapShot = userRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  return snapShot;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
