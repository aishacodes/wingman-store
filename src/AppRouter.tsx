import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";

const AppRouter = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter