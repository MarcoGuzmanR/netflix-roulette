import { API_URL } from '../configs/endpoint';

async function loadMoviesService() {
  try {
    const response = await fetch(API_URL);
    const data     = await response.json();
    return { data };
  }
  catch (error) {
    return { error: error.response };
  }
}

async function searchMovieService(query) {
  try {
    const response = await fetch(`${API_URL}?search=${query}&searchBy=title`);
    const data     = await response.json();
    return { data };
  }
  catch (error) {
    return { error: error.response };
  }
}

export {
  loadMoviesService,
  searchMovieService,
};