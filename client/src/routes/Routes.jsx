import { createHashRouter, RouterProvider } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./index";

export default function Routes() {

  // Hash router used so that portal can be deployed to any relative path eg host:port/somepath
  // if portal is deployed relative to deployment server then browserrouter basepath can make issues
  // removing the original relative path of deployment from url
  // this can be fixed by passing basename to browser router but each time deployment is done in different directory
  // basename must be changed prior to build. Another approach that doesnt require basename changes in hashRouter
  
  const isAuthAny = true; // TODO: bind to authentication token after it is implemented
  const router = createHashRouter([
    ...isAuthAny ? privateRoutes : [],
    ...publicRoutes,
  ]);

  return (
    <RouterProvider router={router} />
  );
}
