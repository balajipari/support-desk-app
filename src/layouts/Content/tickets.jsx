import { useContext, useEffect } from 'react';

import { REDUCER_ACTIONS } from '../../appContants';
import Button from '../../components/Button';
import Search from '../../components/Search';
import Ticket from '../../components/Ticket';
import ModuleContext from '../../hooks/context/ModuleContext';
import { getTickets } from '../../services/ticket';
import './index.css';

const Tickets = () => {
  const { tickets, dispatchTicket } = useContext(ModuleContext);
  const noDataMessage =
    'No Tickets found, Please create one! Hint💡: Create a category first to link with the ticket';

  useEffect(() => {
    loadTickets(dispatchTicket);
  }, []);

  return (
    <div className="content-container">
      <div className="m-8 flex justify-end">
        <Search placeholder={`Search ticket using title...`} />
        <Button label="Search" type="create" />
      </div>
      <div className="content-list">
        {Array.isArray(tickets) && tickets.length > 0 ? (
          tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              name={ticket.title}
              assigneeId={ticket.assignee}
              priority={ticket.priority}
              categoryId={ticket.categoryId}
              timestamp={ticket.createdAt}
            />
          ))
        ) : (
          <span className="font-bold text-2xl my-auto text-gray-500">
            {noDataMessage}
          </span>
        )}
      </div>
    </div>
  );
};

const loadTickets = async (dispatchTicket) => {
  let moduleData = await getTickets();
  dispatchTicket({ type: REDUCER_ACTIONS.ADD_ALL, payload: moduleData.data });
};

export default Tickets;
