import PropTypes from 'prop-types'
import './index.css'

const Category = ({name, timestamp}) => {
    const date = new Date(timestamp).toLocaleDateString()
    return (
        <div className='category'>
            <div className='avatar-wrapper'>
                <img src={`https://api.dicebear.com/avatar.svg`} alt='' className='avatar' />
            </div>

            <div className='category-content'>
                <div className='category-name'>{name}</div>
                <div className='timestamp'>{date}</div>
                <div className='category-desc'>{'text'}</div>
            </div>
        </div>
    )
}

Category.propTypes = {
    name: PropTypes.string,
    timestamp: PropTypes.string,
    description: PropTypes.string
}
export default Category;
