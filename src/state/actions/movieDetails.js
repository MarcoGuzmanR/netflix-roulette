import { SET_MOVIE } from '../constants/movieDetails';

export function setMovieDetails(movie){
  return {
    type: SET_MOVIE,
    payload: movie
  }
}