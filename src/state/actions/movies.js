import {
  SEARCH_MOVIES,
  LOAD_MOVIES,
  SORT_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE
} from '../constants/movies';

export function searchMovies(movies){
  return {
    type: SEARCH_MOVIES,
    movies: movies.data
  }
}

export function loadMovies(movies){
  return {
    type: LOAD_MOVIES,
    movies: movies.data
  }
}

export function sortMovies(movies){
  return {
    type: SORT_MOVIES,
    movies: movies.data
  }
}

export function addMovie(movie){
  return {
    type: ADD_MOVIE,
    movie
  }
}

export function updateMovie(movie){
  return {
    type: UPDATE_MOVIE,
    movie
  }
}

export function deleteMovie(movieId){
  return {
    type: DELETE_MOVIE,
    movieId
  }
}

export function fetchMovies() {
  return async dispatch => {
    const response = await fetch(`http://localhost:4000/movies`);
    const movies   = await response.json();

    dispatch(searchMovies(movies));
  }
}