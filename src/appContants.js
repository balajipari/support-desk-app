export const API_URIS = {
  CATEGORIES: {
    GET: '/categories',
    CREATE: '/categories/create',
    UPDATE: '/categories/update',
    DELETE: '/categories/delete',
  },
  TICKETS: {
    GET: '/tickets',
    CREATE: '/tickets/create',
    UPDATE: '/tickets/update',
    ASSIGN: '/tickets/assign',
    CLOSE: '/tickets/close',
  },
};

export const APP_MODULES = {
  TICKET: 'ticket',
  CATEGORY: 'category',
};

export const API_RESPONSE = {
  ERROR_500: {
    status: 500,
    message: 'Oops something wentwrond',
  },
};

export const TICKET_STATUS = {
  OPEN: 'Open',
  RESOLVE: 'Resolve',
};

export const TICKET_ACTION_BUTTONS = {
  EDIT: 'Edit',
  RESOLVE: 'Resolve',
};

export const REDUCER_ACTIONS = {
  ADD_ALL: 'addAll',
  ADD: 'add',
  LIST_ALL: 'listAll',
  UPDATE: 'update',
  REMOVE: 'remove',
};

export const YET_TO_IMPLEMENT = '❗Yet to Implement❗';
