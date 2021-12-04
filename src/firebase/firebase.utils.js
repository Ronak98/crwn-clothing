import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

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
initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com",
});

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("test", result);
    })
    .catch((error) => {
      console.log("test e", error);
    });
