import {
  SEARCH_MOVIES,
  LOAD_MOVIES,
} from '../constants/movies';

const moviesInitialState = {
  movies: []
}

function moviesReducer(state = moviesInitialState, action) {
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
    default:
      return state;
  }
}

export default moviesReducer;