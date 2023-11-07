import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Config/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

// create user
const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
}
// google login
const googleLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
}
// signIn
const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  })
  return () =>{
    unSubscribe();
  }
},[])

// logout
const logOut = () =>{
  return signOut(auth);
}

  const authInfo = {
    user,
    loading,
    createUser,
    googleLogin,
    signIn,
    logOut,
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
