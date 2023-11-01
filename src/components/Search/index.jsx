import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types'
import './index.css';

const Search = ({placeholder}) => (
  <div className='search'>
    <input className='search-input' type='text' placeholder={placeholder} />
    <FaSearch size='18' className='my-auto' />
  </div>
);

Search.propTypes = {
  placeholder: PropTypes.string
}
export default Search;
