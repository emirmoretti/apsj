
import React, { useContext } from "react";
import { AuthContext } from "./auth-context";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const { currentUser } = useContext(AuthContext)
  let location = useLocation()
  if (!currentUser) {
    return <Navigate to="/" state={ { from: location } } replace />;
  }

  return children;
}

export default RequireAuth
