import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { RouteConstants } from "../constants";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? children : <Navigate to={RouteConstants.SIGN_IN} />;
}
