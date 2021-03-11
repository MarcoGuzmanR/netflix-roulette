import {
  ADD_MOVIE,
  LOAD_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE
} from '../constants/movie';

const movieInitialState = {
  movie: {}
}

function movieReducer(state = movieInitialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movie: action.newMovie
      }
    case LOAD_MOVIE:
      return {
        ...state,
        movie
      }
    case UPDATE_MOVIE:
      return {
        ...state,
        id,
        movie
      }
    case DELETE_MOVIE:
      return {
        ...state,
        id
      }
    default:
      return state;
  }
}

export default movieReducer;