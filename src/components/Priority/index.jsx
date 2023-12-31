import PropTypes from 'prop-types';
import { PiWarning } from 'react-icons/pi';

const Priority = ({ priority = 'low' }) => {
  let color = '';
  switch (priority) {
    case 'low':
      color = 'text-gray-500';
      break;
    case 'medium':
      color = 'text-yellow-500';
      break;
    case 'high':
      color = 'text-red-500';
      break;
  }
  return (
    <div className="flex justify-start mx-2">
      <PiWarning size={20} className={color} />
      <span className={`ml-1 text-sm font-bold ${color}`}>
        {priority.toUpperCase()}{' '}
      </span>
    </div>
  );
};

Priority.propTypes = {
  priority: PropTypes.string,
};

export default Priority;
