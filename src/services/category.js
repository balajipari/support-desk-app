import axios from 'axios';
import { API_RESPONSE, API_URIS } from '../appContants';

const categoryApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Configures Interceptor to use api key based authentication
 * @author Balaji Parimelazhagan
 */
categoryApi.interceptors.request.use((config) => {
  //TODO: Should store token inn local storage and use it
  const apiKey = import.meta.env.VITE_API_KEY;
  config.headers.apiKey = apiKey ? `${apiKey}` : '';

  return config;
});

/**
 * Create a new category
 * @param {Object} newTicket - The new category data
 * @returns {Object} The response from the API
 * @author Balaji Parimelazhagan
 */
export async function createCategory(newTicket) {
  try {
    const result = await categoryApi.post(
      `/api${API_URIS.CATEGORIES.CREATE}`,
      newTicket
    );
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Get a list of categories
 * @returns {Object} The list of categories
 * @author Balaji Parimelazhagan
 */
export async function getCategories() {
  try {
    const categories = await categoryApi.get(`/api${API_URIS.CATEGORIES.GET}`);
    return categories;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Get a category by its ID
 * @param {number} id - The ID of the category to retrieve
 * @returns {Object} The category data
 * @author Balaji Parimelazhagan
 */
export async function getCategoryById(id) {
  try {
    const result = await categoryApi.get(
      `/api${API_URIS.CATEGORIES.GET}/${id}`
    );
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Update an existing category
 * @param {Object} updatedCategory - The updated category data
 * @returns {Object} The response from the API
 * @author Balaji Parimelazhagan
 */
export async function updateCategory(updatedCategory) {
  try {
    const result = await categoryApi.patch(
      `/api${API_URIS.CATEGORIES.UPDATE}/${updatedCategory?.id}`,
      updatedCategory
    );
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}

/**
 * Close a category
 * @param {number} categoryId - The ID of the category to close
 * @returns {Object} The response from the API
 * @author Balaji Parimelazhagan
 */
export async function closeTicket(categoryId) {
  try {
    const result = await categoryApi.delete(
      `/api${API_URIS.CATEGORIES.DELETE}/${categoryId}`
    );
    return result;
  } catch (error) {
    console.error(error);
    return API_RESPONSE.ERROR_500;
  }
}
