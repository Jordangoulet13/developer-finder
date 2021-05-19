import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyB2OOPaDdgIyChz3ut2_fHeNSbpOuCm3Rg",
  authDomain: "dev-finder-881c2.firebaseapp.com",
  projectId: "dev-finder-881c2",
  storageBucket: "dev-finder-881c2.appspot.com",
  messagingSenderId: "502515535082",
  appId: "1:502515535082:web:493de6b7dcef237facdb93",
  measurementId: "G-VP62K4FH8K",
};

const ImagePlaceholder =
  "https://firebasestorage.googleapis.com/v0/b/dev-finder-881c2.appspot.com/o/images%2F1200px-Breezeicons-actions-22-im-user.svg.png?alt=media&token=ae37850a-0f18-4bb2-b262-3bf555564e59";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const image = ImagePlaceholder;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        image,
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
  portfolioLink,
  githubLink,
  linkedinLink
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
    githubLink: githubLink,
    linkedinLink: linkedinLink,
  });
};

export const writeUserImage = (userAuth, image) => {
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth}`);
    userRef.update({
      image: image,
    });
  }
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

export const getUsersCollection = () => {
  const users = [];
  firestore
    .collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        users.push(doc.data());
      });
    });
  return users;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { email, ...data } = doc.data();

    return {
      routeName: encodeURI(doc.id.toLowerCase()),
      id: doc.id.toLowerCase(),
      email,
      ...data,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.id.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
