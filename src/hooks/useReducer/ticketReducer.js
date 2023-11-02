import { REDUCER_ACTIONS } from './../../appContants';

const ticketReducer = (state, action) => {
  let filteredData;
  switch (action.type) {
    case REDUCER_ACTIONS.ADD_ALL:
      return action?.payload;
    case REDUCER_ACTIONS.ADD:
      return [...state, action?.payload];
    case REDUCER_ACTIONS.LIST_ALL:
      return state;
    case REDUCER_ACTIONS.UPDATE:
      filteredData = state.filter((data) => data?.id !== action?.payload?.id);
      return [...filteredData, action?.payload];
    case REDUCER_ACTIONS.REMOVE:
      return state.filter((data) => data?.id !== action?.payload?.id);
  }
};

export default ticketReducer;
