import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Chat from "./pages/Chat";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    }, {
      path: '/chat',
      element: <Chat />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
