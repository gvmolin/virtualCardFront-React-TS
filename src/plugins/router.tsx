import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/login/Index";
import ReduxComponent from "./redux/redux";
import ItemsPage from "../pages/items";

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
  {
    path: "/items",
    element: <ItemsPage/>
  },
]);

export function CustomRouter ():React.ReactElement{
  return (
    <ReduxComponent>
      <RouterProvider router={router} />
    </ReduxComponent>
    
  );
}