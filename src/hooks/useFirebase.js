import React, { useEffect, useState } from "react";
// firebase imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { app } from "../Firebase/firebase.init.js";
import { app } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // for loadingSpinner

  // GOOGLE SIGN IN
  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = googleProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // EMAIL SIGNUP
  const emailSignup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // EMAIL SIGN IN
  const emailSignIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  /* 🔽⏬🔽⏬ SIGN OUT  🔽⏬🔽⏬ */
  const logOut = async () => {
    await signOut(auth)
      .then((d) => {
        // Sign-out successful.
        console.log(d, "signed Out");
      })
      .catch((error) => {
        // An error happened.
        console.log("✨ 🌟  logOut  error:", error);
      });
  };
  /* 🔽⏬🔽⏬ SIGN OUT  🔽⏬🔽⏬ */

  /* 🔽⏬🔽⏬ USER STATE OBSERVER 🔽⏬🔽⏬ */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);
  /* 🔽⏬🔽⏬ USER STATE OBSERVER 🔽⏬🔽⏬ */

  return {
    user,
    setUser,
    loading,
    setLoading,
    logOut,
    handleGoogleSignIn,
    emailSignup,
    emailSignIn,
  };
};

export default useFirebase;
