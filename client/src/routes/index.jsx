import { Navigate } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Home from "../pages/Home";
import { RouteConstants } from "../constants";
import PrivateRoute from "./PrivateRoute";

export const RoutesList = [
  {
    path: RouteConstants.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: RouteConstants.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: RouteConstants.NOT_FOUND,
    element: <Navigate to={RouteConstants.SIGN_IN} />,
  },
  {
    path: RouteConstants.ROOT,
    element: <Navigate to={RouteConstants.POSTS} />,
  },
  {
    path: RouteConstants.POSTS,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
]
