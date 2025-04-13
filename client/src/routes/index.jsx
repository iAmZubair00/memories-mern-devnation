import { Navigate } from "react-router-dom";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Home from "../pages/Home";

export const publicRoutes = [
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    { 
      path: '*',
      element: <Navigate to='/signin' />,
    },
  ];
  
  export const privateRoutes = [
    {
      path: '',
      element: <Navigate to='/posts' />,
    },
    {
      path: '/posts',
      element: <Home />,
    },
  ]