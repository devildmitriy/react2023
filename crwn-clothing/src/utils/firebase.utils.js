import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5IFBEUmYZflf7kGOO1ew1hCXsqjvfv8o",
  authDomain: "crwn-clothing-db-93522.firebaseapp.com",
  projectId: "crwn-clothing-db-93522",
  storageBucket: "crwn-clothing-db-93522.appspot.com",
  messagingSenderId: "381650001802",
  appId: "1:381650001802:web:83e8419e4dba710119f273",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const porvider = new GoogleAuthProvider();

porvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, porvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
