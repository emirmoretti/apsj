import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignOutUser, userStateListener } from "../firebase";

export const AuthContext = createContext({
  // "User" comes from firebase auth-public.d.ts
  currentUser: {},
  setCurrentUser: (_user) => {},
  signOut: () => {}
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user)
      }
    });
    return unsubscribe
  }, [setCurrentUser]);

  // As soon as setting the current user to null, 
  // the user will be redirected to the home page. 
  const signOut = () => {
    SignOutUser()
    setCurrentUser(null)
    navigate('/')
  }

  const value = {
    currentUser, 
    setCurrentUser,
    signOut
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
