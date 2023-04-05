
import Login from './app/Pages/Login/Login';
import Search from './app/Pages/Search/components/Search';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
