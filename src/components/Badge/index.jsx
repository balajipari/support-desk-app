import PropTypes from 'prop-types';

const Badge = ({ name }) => {
  return (
    <div
      className={`my-2 mx-2 w-max min-w-max border-2 rounded-md px-2 py-1 font-bold text-xs border-purple-500 text-purple-500`}
    >
      {name}
    </div>
  );
};

Badge.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Badge;
