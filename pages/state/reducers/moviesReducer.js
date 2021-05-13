import {
  SEARCH_MOVIES,
  LOAD_MOVIES,
  SORT_MOVIES,
  FILTER_MOVIES,
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
        movies: action.payload
      }
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case SORT_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case FILTER_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case ADD_MOVIE:
      return {
        ...state,
        movies: [action.payload, ...state.movies]
      }
    case UPDATE_MOVIE:
      const movieIndexToUpdate = state.movies.findIndex(movie => movie.id === action.payload.id);
      const copyMovies = [...state.movies];

      copyMovies.splice(movieIndexToUpdate, 1);
      copyMovies.splice(movieIndexToUpdate, 0, action.payload);

      return {
        ...state,
        movies: copyMovies
      }
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      }
    default:
      return state;
  }
}

export default moviesReducer;