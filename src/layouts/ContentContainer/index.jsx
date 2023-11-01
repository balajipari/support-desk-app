import { BsPlusCircleFill } from 'react-icons/bs';
import Ticket from '../../components/Ticket';
import './index.css';
import { Search } from '../../components/Search';


const ContentContainer = () => {
  return (
    <div className='content-container'>
      <div className='m-8 flex justify-end'>
        <Search/>
        <button className='button-primary'>Create</button>
      </div>
      <div className='content-list'>
        <Ticket
          name='laptop speaker not working'
          timestamp='one week ago'
          assignee={`Balaji`}
        />
        <Ticket name='adress change' timestamp='one week ago' />
        <Ticket name='replace id card' timestamp='5 days ago' assignee={`Balaji`} />
        <Ticket
          name='access for work profile'
          timestamp='4 days ago'
        />
        <Ticket
          name='monitor request'
          timestamp='4 days ago'
          assignee={`Arun`}
        />
        <Ticket
          name='Os change request'
          timestamp='2 days ago'
        />
      </div>
    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='assignee' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='assignee-green-500 dark:shadow-lg mx-2 dark:assignee-primary'
  />
);

export default ContentContainer;
