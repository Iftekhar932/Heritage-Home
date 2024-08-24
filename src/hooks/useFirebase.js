import React, { useState, useEffect } from "react";
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
    setLoading(true); // Show loading spinner
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
      })
      .finally(() => {
        setLoading(false); // Hide loading spinner
      });
  };

  // EMAIL SIGN IN
  const emailSignIn = async (email, password) => {
    setLoading(true); // Show loading spinner
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
      })
      .finally(() => {
        setLoading(false); // Hide loading spinner
      });
  };

  /* 🔽⏬🔽⏬ SIGN OUT  🔽⏬🔽⏬ */
  const logOut = async () => {
    setLoading(true); // Show loading spinner
    await signOut(auth)
      .then((d) => {
        // Sign-out successful.
        navigate("/");
        window.alert("Signed Out");
      })
      .catch((error) => {
        // An error happened.
        console.log("✨ 🌟  logOut  error:", error);
      })
      .finally(() => {
        setLoading(false); // Hide loading spinner
      });
  };
  /* 🔽⏬🔽⏬ SIGN OUT  🔽⏬🔽⏬ */

  /* 🔽⏬🔽⏬ USER STATE OBSERVER 🔽⏬🔽⏬ */
  /* 🔽⏬🔽⏬ USER STATE OBSERVER 🔽⏬🔽⏬ */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false); // Hide loading spinner after initial state update
      } else {
        setUser(null);
        setLoading(false); // Hide loading spinner

        // Check if the current path is in the list of allowed public pages
        const allowedPublicPages = ["/loginPage", "/about", "/projects", "/"]; // Replace with your desired public pages
        if (!allowedPublicPages.includes(window.location.pathname)) {
          // Redirect to the login page if the user is not logged in and the current page is not public
          navigate("/");
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, navigate]);
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
