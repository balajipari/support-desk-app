import { BsPeople } from 'react-icons/bs';
import { BiCategoryAlt, BiCog } from 'react-icons/bi';
import { FaTeamspeak, FaTicketAlt } from 'react-icons/fa';
import PropTypes  from 'prop-types';
import './index.css'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaTeamspeak size="28" />} />
        <Divider />
        <SideBarIcon icon={<FaTicketAlt size="25" />} />
        <SideBarIcon icon={<BsPeople size="25" />} />
        <SideBarIcon icon={<BiCategoryAlt size="25" />} />
        <Divider />
        <SideBarIcon icon={<BiCog size="30" />} />
    </div>
  );
};

const SideBarIcon = ({icon}) => (
  <div className="sidebar-icon">
    {icon}
  </div>
);

SideBarIcon.PropTypes = {
  icon: PropTypes.children
}


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
