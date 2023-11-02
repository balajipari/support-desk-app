import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import Content from './layouts/Content';
import Categories from './layouts/Content/categories';
import Tickets from './layouts/Content/tickets';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/ticket',
        element: <Tickets />,
      },
      {
        path: '/category',
        element: <Categories />,
      },
      {
        path: '/user',
        element: <Content />,
      },
      {
        path: '/setting',
        element: <Content />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
