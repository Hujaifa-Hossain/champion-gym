import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const GoogleProvider = new GoogleAuthProvider();

  const SignInUsingGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [error]);
  return {
    user,
    error,
    SignInUsingGoogle,
  };
};

export default useFirebase;
