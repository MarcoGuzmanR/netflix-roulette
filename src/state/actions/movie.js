import {
  ADD_MOVIE,
  LOAD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE
} from '../constants/movie';

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    newMovie: movie
  }
}

export function loadMovie(movie) {
  return {
    type: LOAD_MOVIE,
    movie
  }
}

export function updateMovie(id, movie) {
  return {
    type: UPDATE_MOVIE,
    id,
    movie
  }
}

export function deleteMovie(id) {
  return {
    type: DELETE_MOVIE,
    id,
  }
}