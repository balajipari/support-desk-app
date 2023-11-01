import {
  FaHashtag,
  FaRegBell,
  FaUserCircle,
} from 'react-icons/fa';
import PropTypes from 'prop-types'

import './index.css';

const TopNavigation = ({title}) => {
  return (
    <div className='top-navigation'>
      <FaHashtag size='20' className='title-hashtag' />
      <h1 className='title-text'>{title.toUpperCase()}</h1>
      <BellIcon />
      <FaUserCircle size='32' className='top-navigation-icon mr-10' />
    </div>
  );
};
const BellIcon = () => <FaRegBell size='30' className='top-navigation-icon' />;

TopNavigation.propTypes = {
  title: PropTypes.string
}

export default TopNavigation;