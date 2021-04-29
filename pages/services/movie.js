import { API_URL } from '../configs/endpoint';

const MovieService = {
  getMovie: async (movieId) => {
    try {
      const response = await fetch(`${API_URL}/${movieId}`);
      const data     = await response.json();
      return { data };
    }
    catch (error) {
      return { error: error.response };
    }
  },
  createMovie: async (movie) => {
    try {
      const responseJson = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await responseJson.json();
      return { data };
    }
    catch (error) {
      return { error: error.response };
    }
  },
  updateMovie: async (movie) => {
    try {
      const responseJson = await fetch(API_URL, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await responseJson.json();
      return { data };
    }
    catch (error) {
      return { error: error.response };
    }
  },
  deleteMovie: async (movieId) => {
    try {
      const responseJson = await fetch(`${API_URL}/${movieId}`, {
        method: 'DELETE'
      });
      const response = await responseJson.json();
      return { response };
    }
    catch (error) {
      return { error: error.response };
    }
  }
};

export default MovieService;