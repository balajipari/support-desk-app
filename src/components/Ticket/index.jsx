
import PropTypes from 'prop-types';
import { HiOutlineTicket } from 'react-icons/hi'
import './index.css'
import Button from '../Button';
import Priority from '../Priority';
import {TICKET_STATUS, TICKET_ACTION_BUTTONS} from '../../appContants'

const Ticket = ({ name, timestamp, priority, assignee = null, status}) => {
  const date = new Date(timestamp)
  return (
    <div className={'ticket'}>
      <HiOutlineTicket size={30} color='purple' className='ml-2' />
      <p className='ticket-title'>
        {name}
        <small className='timestamp'>{`${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`}</small>
      </p>
      <div className='ticket-attributes'>        
          <Assignee name={assignee} />
          <Priority priority={priority?.toLowerCase()} />
          <Button
            disabled={status===TICKET_STATUS.OPEN}
            label={TICKET_ACTION_BUTTONS.EDIT}
          />
          <Button
            disabled={status===TICKET_STATUS.OPEN}
            label={TICKET_ACTION_BUTTONS.RESOLVE}
            type={'resolve'}
          />
      </div>
    </div>
  );
};

Ticket.propTypes = {
    name: PropTypes.string,
    timestamp: PropTypes.string,
    priority: PropTypes.string,
    assignee: PropTypes.string,
    status: PropTypes.string,
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