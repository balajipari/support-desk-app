import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import { YET_TO_IMPLEMENT } from './appContants';
import StaticContent from './assets/StaticContent';
import Categories from './layouts/Content/categories';
import Tickets from './layouts/Content/tickets';
import Users from './layouts/Content/users';

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
        element: <Users />,
      },
      {
        path: '/setting',
        element: <StaticContent data={YET_TO_IMPLEMENT} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
