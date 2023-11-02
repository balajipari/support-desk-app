import { BsPeople } from 'react-icons/bs';
import { BiCategoryAlt, BiCog } from 'react-icons/bi';
import { FaTeamspeak, FaTicketAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes  from 'prop-types';
import './index.css'

const SideBar = () => {
  const navigate = useNavigate();
  
  const navigateToModules = (route) => {
    navigate(route, {replace: true});
  };

  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg'>
                    
        <SideBarIcon icon={<FaTeamspeak size='28' />} route='/' clickHandler={navigateToModules} />
        <hr className='sidebar-hr' />
        <SideBarIcon icon={<FaTicketAlt size='25' />} route='/ticket' clickHandler={navigateToModules} />
        <SideBarIcon icon={<BiCategoryAlt size='25' />} route='/category' clickHandler={navigateToModules} />
        <SideBarIcon icon={<BsPeople size='25' />} route='/user' clickHandler={navigateToModules} />
        <hr className='sidebar-hr' />
        <SideBarIcon icon={<BiCog size='30' />}  route='/setting' clickHandler={navigateToModules} />
    </div>
  );
};

const SideBarIcon = ({icon, route, clickHandler}) => (
  <div className='sidebar-icon' onClick={() => clickHandler(route)}>
    {icon}
  </div>
);

SideBarIcon.propTypes = {
  icon: PropTypes.node,
  route: PropTypes.string,
  clickHandler: PropTypes.func
}

export default SideBar;


