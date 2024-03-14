import axios from "axios";
import { ACCESS_KEY } from "./config";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (searchText, page) => {
  const response = await axios.get(`search/photos/`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchText,
      per_page: 12,
      page,
    },
  });

  return response.data.results;
};

// total

// total_pages
