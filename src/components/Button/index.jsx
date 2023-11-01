import PropTypes from 'prop-types'
import './index.css';

const Button = ({label, disabled, type}) => {
  let color = ''
  switch(type) {
    case 'create':
      color = 'bg-green-500 hover:text-green-600 border-green-500 ';
      break;
    case 'delete':
      color = 'bg-red-500 hover:text-red-500 border-red-500';
      break;
    case 'resolve':
      color = 'bg-purple-500 hover:text-purple-500 border-purple-500';
      break;
    default:
      color = 'bg-gray-500 hover:text-gray-500 border-gray-500';
  }
    return (
        <button
          disabled={disabled}
          className={`button-primary ${color}`}
        >
          {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string, 
    disabled: PropTypes.bool
}

export default Button;