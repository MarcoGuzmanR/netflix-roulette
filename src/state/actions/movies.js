import {
  SEARCH_MOVIES,
} from '../constants/movies';

export function searchMovies(movies){
  return {
    type: SEARCH_MOVIES,
    movies: movies.data
  }
}

export const fetchMovies = () => {
  return async dispatch => {
    const response = await fetch(`http://localhost:4000/movies`);
    const movies   = await response.json();

    console.log(movies);
    dispatch(searchMovies(movies));
  }
}