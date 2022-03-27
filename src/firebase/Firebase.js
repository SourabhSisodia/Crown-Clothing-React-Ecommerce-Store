import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDuL2me9znQwrDgsfARofhWbtz82MMwZIE",
  authDomain: "crwn-clothing-d9ea9.firebaseapp.com",
  projectId: "crwn-clothing-d9ea9",
  storageBucket: "crwn-clothing-d9ea9.appspot.com",
  messagingSenderId: "913734954960",
  appId: "1:913734954960:web:0c1c05c9c15b3fb93553d5",
  measurementId: "G-FVLBXHJ59L",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
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
      console.log(error);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
