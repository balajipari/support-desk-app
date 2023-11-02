import PropTypes from 'prop-types';

const StaticContent = ({ data }) => {
  return (
    <div className="w-full h-80 flex items-center justify-center font-bold text-2xl text-gray-500">
      {data}
    </div>
  );
};

StaticContent.propTypes = {
  data: PropTypes.string,
};

export default StaticContent;
