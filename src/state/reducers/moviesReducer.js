import {
  SEARCH_MOVIES,
  LOAD_MOVIES,
  SORT_MOVIES,
  ADD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  FILTER_MOVIES
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
    case FILTER_MOVIES:
      return {
        ...state,
        movies: action.movies
      }
    case ADD_MOVIE:
      return {
        ...state,
        movies: [action.movie, ...state.movies]
      }
    case UPDATE_MOVIE:
      const movieIndexToUpdate = state.movies.findIndex(movie => movie.id === action.movie.id);
      const copyMovies = [...state.movies];

      copyMovies.splice(movieIndexToUpdate, 1);
      copyMovies.splice(movieIndexToUpdate, 0, action.movie);

      return {
        ...state,
        movies: copyMovies
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