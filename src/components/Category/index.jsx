import PropTypes from 'prop-types';
import './index.css';

const Category = ({ name, description }) => {
  return (
    <div className="category">
      <div className="avatar-wrapper">
        <img src={`src/assets/category.png`} alt="" className="avatar" />
      </div>

      <div className="category-content">
        <div className="category-name">{name}</div>
        <div className="category-desc">{description}</div>
      </div>
    </div>
  );
};

Category.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
export default Category;
