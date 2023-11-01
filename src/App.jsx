import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AppLayout from './AppLayout';
import ContentContainer from './layouts/ContentContainer';
import { getTickets } from './services/ticketService';

const routes = createBrowserRouter([
  {
    path: '/home',
    element: <AppLayout />,
    children: [
      {
        path: '/home/ticket',
        element: <ContentContainer />,
        loader: async () => await getTickets(),
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
