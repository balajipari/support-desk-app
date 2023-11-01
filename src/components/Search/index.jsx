import { FaSearch } from 'react-icons/fa';
import './index.css';

export const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='my-auto' />
  </div>
);
