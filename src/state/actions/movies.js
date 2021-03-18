import {
  SEARCH_MOVIES,
  LOAD_MOVIES,
  SORT_MOVIES,
  FILTER_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE
} from '../constants/movies';

export function searchMovies(movies){
  return {
    type: SEARCH_MOVIES,
    payload: movies.data
  }
}

export function loadMovies(movies){
  return {
    type: LOAD_MOVIES,
    payload: movies.data
  }
}

export function sortMovies(movies){
  return {
    type: SORT_MOVIES,
    payload: movies.data
  }
}

export function filterMovies(movies){
  return {
    type: FILTER_MOVIES,
    payload: movies.data
  }
}

export function addMovie(movie){
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export function updateMovie(movie){
  return {
    type: UPDATE_MOVIE,
    payload: movie
  }
}

export function deleteMovie(movieId){
  return {
    type: DELETE_MOVIE,
    payload: movieId
  }
}