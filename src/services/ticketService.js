import axios from 'axios';
import { API_URIS, API_RESPONSE } from './../appContants';

const ticketApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/Object' },
});

/**
 * Configures Interceptor to use api key based authentication
 * @author Balaji Parimelazhagan
 */
ticketApi.interceptors.request.use((config) => {
  //TODO: Should store token inn local storage and use it
  const apiKey = import.meta.env.VITE_API_KEY;
  config.headers.apiKey = apiKey ? `${apiKey}` : '';

  return config;
});

/**
 * Create a new ticket
 * @param {Object} newTicket - The new ticket data
 * @returns {Object} The response from the API
 * @author Balaji Parimelazhagan
 */
export async function createTicket(newTicket) {
  try {
    const result = await ticketApi.post(
      `/api${API_URIS.TICKETS.CREATE}`,
      newTicket
    );
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Get a list of tickets
 * @returns {Object} The list of tickets
 * @author Balaji Parimelazhagan
 */
export async function getTickets() {
  try {
    const tickets = await ticketApi.get(`/api${API_URIS.TICKETS.GET}`);
    return tickets;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Get a ticket by its ID
 * @param {number} id - The ID of the ticket to retrieve
 * @returns {Object} The ticket data
 * @author Balaji Parimelazhagan
 */
export async function getTicketById(id) {
  try {
    const result = await ticketApi.get(`/api${API_URIS.TICKETS.GET}/${id}`);
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Update an existing ticket
 * @param {Object} updatedTicket - The updated ticket data
 * @returns {Object} The response from the API
 * @author Balaji Parimelazhagan
 */
export async function updateTicket(updatedTicket) {
  try {
    const result = await ticketApi.patch(
      `/api${API_URIS.TICKETS.UPDATE}/${updatedTicket?.id}`,
      updatedTicket
    );
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Assign a ticket to a user
 * @param {number} ticketId - The ID of the ticket to assign
 * @param {number} assignedTo - The user to assign the ticket to
 * @returns {Object} The response from the API
 * @author Balaji Parimelazhagan
 */
export async function assignTicket(ticketId, assignedTo) {
  try {
    const result = await ticketApi.post(
      `/api${API_URIS.TICKETS.ASSIGN}/${ticketId}`,
      { assignedTo }
    );
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Close a ticket
 * @param {number} ticketId - The ID of the ticket to close
 * @returns {Object} The response from the API
 * @author Balaji Parimelazhagan
 */
export async function closeTicket(ticketId) {
  try {
    const result = await ticketApi.post(
      `/api${API_URIS.TICKETS.CLOSE}/${ticketId}`
    );
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}
