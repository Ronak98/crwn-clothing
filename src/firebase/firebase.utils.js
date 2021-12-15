import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBojFwyWUMfRNiEFKyipoQgoajle1YLYm8",
  authDomain: "crwn-db-2982a.firebaseapp.com",
  projectId: "crwn-db-2982a",
  storageBucket: "crwn-db-2982a.appspot.com",
  messagingSenderId: "90495475985",
  appId: "1:90495475985:web:9e3ba84f80f43c833cacb0",
  measurementId: "G-3HV797FMKN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com",
});

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then(function (result) {
      console.log("result", result);
    })
    .catch(function (error) {
      console.error(error);
    });

const db = getFirestore(firebaseApp);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(db, "users", `${userAuth.uid}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return docRef;
};
