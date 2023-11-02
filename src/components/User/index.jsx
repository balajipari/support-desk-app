import PropTypes from 'prop-types';
import './index.css';

const Category = ({ name, email, phone, role, department }) => {
  return (
    <div className="user">
      <div className="avatar-wrapper">
        <img src={`src/assets/user.png`} alt="" className="avatar" />
      </div>

      <div className="user-content">
        <div className="user-name">{name}</div>
        <div className="user-text">{email}</div>
        <div className="user-text">{phone}</div>
        <div className="user-text">{role}</div>
        <div className="user-text">{department}</div>
      </div>
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  role: PropTypes.string,
  department: PropTypes.string,
};
export default Category;
