import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Orders from "./pages/Orders";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/chat',
      element: <Chat />,
    },
    {
      path: '/orders',
      element: <Orders />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
