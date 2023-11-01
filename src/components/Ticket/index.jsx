
import PropTypes from 'prop-types';
import './index.css'
import { Priority } from '../Priority';
import { Badge } from '../Badge';

const Ticket = ({ name, timestamp, assignee = null }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'ticket'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='ticket-content'>
        <p className='ticket-title'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <Assignee name={assignee} />
      </div>
      <div className='ticket-attributes'>
        <div>
          <Priority priority='low' />
          <Badge name='In-Progress' badgeColor='red' />
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
    name: PropTypes.string,
    timestamp: PropTypes.string,
    assignee: PropTypes.string
}

const Assignee = ({name}) => {
  return (
    <p className='ticket-assignee'>
      { name !== null ?
         name :
         <span className='italic text-sm text-gray-400'>unassigned</span>
      }
    </p>
  )
}

Assignee.propTypes = {
  name: PropTypes.string
}

export default Ticket;