import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/home"/>
  },
]);

export function CustomRouter ():React.ReactElement{
  return (
    <RouterProvider router={router} />
  );
}