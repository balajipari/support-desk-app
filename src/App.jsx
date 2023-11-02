import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AppLayout from './AppLayout';
import ContentContainer from './layouts/ContentContainer';
import { getTickets } from './services/ticket';
import { getCategories } from './services/category';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/ticket',
        element: <ContentContainer />,
        loader: async () => await getTickets(),
      },
      {
        path: '/category',
        element: <ContentContainer />,
        loader: async () => await getCategories(),
      },
      {
        path: '/user',
        element: <ContentContainer />,
        // loader: async () => await getTickets(),
      },
      {
        path: '/setting',
        element: <ContentContainer />,
        // loader: async () => await getTickets(),
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App
