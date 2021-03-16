import {
  SEARCH_MOVIES,
  LOAD_MOVIES,
  SORT_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE
} from '../constants/movies';

const initialState = {
  movies: []
}

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.movies
      }
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.movies
      }
    case SORT_MOVIES:
      return {
        ...state,
        movies: action.movies
      }
    case ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.unshift(action.movie)
      }
    case UPDATE_MOVIE:
      return {
        ...state,
        movies: movies
      }
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.movieId)
      }
    default:
      return state;
  }
}

export default moviesReducer;