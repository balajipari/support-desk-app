import { useReducer } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContext from './hooks/context/ModuleContext';
import categoryReducer from './hooks/useReducer/categoryReducer';
import ticketReducer from './hooks/useReducer/ticketReducer';
import ContentSlider from './layouts/ContentSlider';
import SideBar from './layouts/SideBar';
import TopNavigation from './layouts/TopNavigation';

const AppLayout = () => {
  const pathSegments = useLocation().pathname.split('/');
  const location = pathSegments[pathSegments.length - 1];
  const [tickets, dispatchTicket] = useReducer(ticketReducer, null);
  const [categories, dispatchCategory] = useReducer(categoryReducer, null);
  const moduleContext = {
    tickets,
    dispatchTicket,
    categories,
    dispatchCategory,
  };
  return (
    <div className="h-full overflow-hidden">
      <SideBar />
      <ModuleContext.Provider value={moduleContext}>
        <div className="ml-16 h-full">
          <TopNavigation title={location} />
          <div className="grid grid-cols-9 gap-4 h-full">
            <div className="col-span-6 border-r-2">
              <Outlet />
            </div>
            <div className="col-span-3">
              <ContentSlider data={location} />
            </div>
          </div>
        </div>
      </ModuleContext.Provider>
    </div>
  );
};

export default AppLayout;
