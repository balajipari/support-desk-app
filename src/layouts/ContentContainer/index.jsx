import { useLoaderData, useOutletContext } from 'react-router-dom';
import {APP_MODULES } from './../../appContants'

import './index.css';
import Button from '../../components/Button';
import Search from '../../components/Search';
import Ticket from '../../components/Ticket';


const ContentContainer = () => {
  const dataArray = useLoaderData().data;
  const module = useOutletContext();

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
          <Ticket
            key={data.id}
            name={data.title}
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
        {dataArray.map(data => (renderComp(module, data)))}       
      </div>
    </div>
  );
};

export default ContentContainer;
