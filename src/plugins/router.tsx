import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/login/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/login"/>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/home",
    element: <Home />
  },
]);

export function CustomRouter ():React.ReactElement{
  return (
    <RouterProvider router={router} />
  );
}