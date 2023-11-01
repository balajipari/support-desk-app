import PropTypes from 'prop-types';

export const Badge = ({ name, badgeColor }) => {
const borderColor = `border-${badgeColor}-500`;
const textColor = `text-${badgeColor}-500`;
  return (
    <div className={`my-2 mx-2 w-max border-2 rounded-md px-2 py-1 font-bold text-xs ${borderColor} ${textColor}`}>{name}</div>
  );
}

Badge.propTypes = {
  name: PropTypes.string.isRequired,
  badgeColor: PropTypes.string.isRequired,
};
