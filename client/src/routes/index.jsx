import { Navigate } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Home from "../pages/Home";
import { RouteConstants } from "../constants";

export const publicRoutes = [
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
      element: <Navigate to='/signin' />,
    },
  ];
  
  export const privateRoutes = [
    {
      path: RouteConstants.ROOT,
      element: <Navigate to='/posts' />,
    },
    {
      path: RouteConstants.POSTS,
      element: <Home />,
    },
  ]