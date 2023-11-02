import { useLoaderData, useNavigate, useOutletContext } from 'react-router-dom';
import {APP_MODULES } from './../../appContants'

import './index.css';
import Button from '../../components/Button';
import Search from '../../components/Search';
import Ticket from '../../components/Ticket';
import Category from '../../components/Caegory';


const ContentContainer = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const module = useOutletContext();
  const noDataMessage = `No ${module} found, Please create one`

  let dataArray;
  try {
    dataArray = loaderData?.data || [];
  } catch (error) {
    navigate('/', {replace: true});
  }

  const renderComp = (type, data) => {
    switch(type) {
      case APP_MODULES.TICKET:
        return (
          <Ticket
            key={data.id}
            name={data.title}
            timestamp={data.createdAt}
          />
        )
      case APP_MODULES.CATEGORY:
        return (
          <Category
            key={data.id}
            name={data.name}
            timestamp={data.createdAt}
          />
        )
    }
  }

  return (
    <div className='content-container'>
      <div className='m-8 flex justify-end'>
        <Search placeholder={`Search ${module} using title...`} />
        <Button label='Search' type='create'/>
      </div>
      <div className='content-list'>
        {Array.isArray(dataArray) && dataArray.length > 0 ? 
          dataArray.map(data => (renderComp(module, data))) :
          <span className='font-bold text-2xl my-auto text-gray-500'>{noDataMessage}</span>}       
      </div>
    </div>
  );
};

export default ContentContainer;
