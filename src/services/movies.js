import { API_URL } from '../configs/endpoint';

const MoviesService = {
  loadMovies: async () => {
    try {
      const response = await fetch(API_URL);
      const data     = await response.json();
      return { data };
    }
    catch (error) {
      return { error: error.response };
    }
  },
  searchMovies: async (query) => {
    try {
      const response = await fetch(`${API_URL}?search=${query}&searchBy=title`);
      const data     = await response.json();
      return { data };
    }
    catch (error) {
      return { error: error.response };
    }
  },
  sortMovies: async (sortBy) => {
    try {
      const response = await fetch(`${API_URL}?sortBy=${sortBy}`);
      const data     = await response.json();
      return { data };
    }
    catch (error) {
      return { error: error.response };
    }
  }
};

export default MoviesService;