import PropTypes from 'prop-types';
import { TicketForm, CategoryForm } from './../../forms';
import { YET_TO_IMPLEMENT } from './../../appContants';

const ContentSlider = ({ data }) => {
  const getForm = (param) => {
    switch (param) {
      case 'ticket':
        return <TicketForm />;
      case 'category':
        return <CategoryForm />;
      default:
        return (
          <div className="w-full h-80 flex items-center justify-center font-bold text-2xl text-gray-500">
            {YET_TO_IMPLEMENT}
          </div>
        );
    }
  };
  return (
    <div>
      <div className="font-bold text-center text-2xl my-10">
        CREATE {data.toUpperCase()}
      </div>
      {getForm(data)}
    </div>
  );
};
ContentSlider.propTypes = {
  data: PropTypes.string,
};

export default ContentSlider;
