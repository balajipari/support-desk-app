import PropTypes from 'prop-types';
import { useContext } from 'react';
import { HiOutlineTicket } from 'react-icons/hi';
import { TICKET_ACTION_BUTTONS, TICKET_STATUS } from '../../appContants';
import ModuleContext from '../../hooks/context/ModuleContext';
import Badge from '../Badge';
import Button from '../Button';
import Priority from '../Priority';
import users from './../../mock/user';
import './index.css';

const Ticket = ({
  name,
  timestamp,
  priority,
  assigneeId,
  categoryId,
  status,
}) => {
  const { categories } = useContext(ModuleContext);
  const date = new Date(timestamp);
  const assignee = (users || []).find((user) => user.id === assigneeId);
  const category = (categories || []).find(
    (category) => category.id === categoryId
  );
  return (
    <div className={'ticket'}>
      <HiOutlineTicket size={30} color="purple" className="ml-2" />
      <p className="ticket-title">{name}</p>
      <small className="timestamp">{`${date.toLocaleDateString()}`}</small>
      <Badge name={category?.name || ''} />
      <div className="ticket-attributes">
        <Assignee name={assignee?.name || ''} />
        <Priority priority={priority?.toLowerCase()} />
        <Button
          disabled={status === TICKET_STATUS.OPEN}
          label={TICKET_ACTION_BUTTONS.EDIT}
        />
        <Button
          disabled={status === TICKET_STATUS.OPEN}
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
  assigneeId: PropTypes.string,
  categoryId: PropTypes.string,
  status: PropTypes.string,
};

const Assignee = ({ name }) => {
  return (
    <p className="ticket-assignee">
      {name !== null ? (
        name
      ) : (
        <span className="italic text-sm text-gray-400">unassigned</span>
      )}
    </p>
  );
};

Assignee.propTypes = {
  name: PropTypes.string,
};

export default Ticket;
