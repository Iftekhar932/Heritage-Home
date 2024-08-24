import React, { useEffect, useState } from "react";
// firebase imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { app } from "../Firebase/firebase.init.js";
import { app } from "../firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const useFirebase = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // for loadingSpinner
  const navigate = useNavigate();

  // EMAIL SIGNUP
  const emailSignup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        window.alert("User Account Created");
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
        window.alert("User Signed In");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode || errorMessage) {
          window.alert("Login Failed", errorMessage, errorCode);
        }
      });
  };

  /* 🔽⏬🔽⏬ SIGN OUT  🔽⏬🔽⏬ */
  const logOut = async () => {
    await signOut(auth)
      .then((d) => {
        // Sign-out successful.
        navigate("/");
        window.alert("Signed Out");
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
    emailSignup,
    emailSignIn,
  };
};

export default useFirebase;
