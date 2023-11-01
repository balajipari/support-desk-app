import PropTypes from 'prop-types';

export const Badge = ({ name, badgeColor }) => {
const borderColor = `border-${badgeColor}-500`;
const bgColor = `bg-${badgeColor}-200`;
const textColor = `text-${badgeColor}-600`;
  return (
    <div className={`my-2 w-max border-2 rounded-md px-2 py-1 font-semibold text-xs ${borderColor} ${bgColor} ${textColor}`}>{name}</div>
  );
}

Badge.propTypes = {
  name: PropTypes.string.isRequired,
  badgeColor: PropTypes.string.isRequired,
};
