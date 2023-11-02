import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

import { APP_MODULES, REDUCER_ACTIONS } from '../../appContants';
import Button from '../../components/Button';
import Category from '../../components/Category';
import Search from '../../components/Search';
import Ticket from '../../components/Ticket';
import ModuleContext from '../../hooks/context/ModuleContext';
import { getCategories } from '../../services/category';
import { getTickets } from '../../services/ticket';
import './index.css';

const Content = () => {
  const module = useOutletContext();
  const moduleContext = useContext(ModuleContext);
  const noDataMessage = `No ${module} found, Please create one`;
  loadModuleData(module, moduleContext);

  let dataArray =
    module === APP_MODULES.TICKET
      ? moduleContext.tickets
      : moduleContext.category;

  return (
    <div className="content-container">
      <div className="m-8 flex justify-end">
        <Search placeholder={`Search ${module} using title...`} />
        <Button label="Search" type="create" />
      </div>
      <div className="content-list">
        {Array.isArray(dataArray) && dataArray.length > 0 ? (
          dataArray.map((data) => renderComp(module, data))
        ) : (
          <span className="font-bold text-2xl my-auto text-gray-500">
            {noDataMessage}
          </span>
        )}
      </div>
    </div>
  );
};

const loadModuleData = async (module, moduleContext) => {
  let moduleData;
  switch (module) {
    case APP_MODULES.TICKET:
      moduleData = await getTickets();
      moduleContext.dispatchTicket({
        type: REDUCER_ACTIONS.ADD_ALL,
        payload: moduleData.data,
      });
      break;
    case APP_MODULES.CATEGORY:
      moduleData = await getCategories();
      moduleContext.dispatchCategory({
        type: REDUCER_ACTIONS.ADD_ALL,
        payload: moduleData.data,
      });
      break;
  }
};

const renderComp = (type, data) => {
  switch (type) {
    case APP_MODULES.TICKET:
      return (
        <Ticket key={data.id} name={data.title} timestamp={data.createdAt} />
      );
    case APP_MODULES.CATEGORY:
      return (
        <Category key={data.id} name={data.name} timestamp={data.createdAt} />
      );
  }
};

export default Content;
