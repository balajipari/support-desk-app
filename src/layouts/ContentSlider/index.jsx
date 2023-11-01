import PropTypes from 'prop-types';
import { TicketForm, CategoryForm } from './../../forms';

const ContentSlider = ({data}) => {
    const getForm = (param) => {
        switch(param) {
            case 'ticket':
                return <TicketForm />;
            case 'department':
                return <CategoryForm />;
        }
    }
    return(
    <div>
        <div className='font-bold text-center text-2xl my-10'>CREATE {data.toUpperCase()}</div>
        {getForm(data)}
    </div>
    )
}
ContentSlider.propTypes = {
    data: PropTypes.string
}

export default ContentSlider;