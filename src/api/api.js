import axios from "axios";

const UNSPLASH_BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_API_ACCESS_KEY;

/**
 * Searches for images on Unsplash.
 *
 * @param {string} query - The search keyword.
 * @param {number} page - The page number.
 * @param {number} perPage - Number of images per page.
 * @returns {Promise<Array>} - Array of images (data.results).
 */

// console.log(UNSPLASH_BASE_URL, ACCESS_KEY);

export const fetchImages = async (query, page = 1, perPage = 12, signal) => {
  const response = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      // orientation: "landscape",
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
    signal,
  });

  return response.data.results;
};
