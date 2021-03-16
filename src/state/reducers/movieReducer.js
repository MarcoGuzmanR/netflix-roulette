import {
  ADD_MOVIE,
  LOAD_MOVIE,
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
    default:
      return state;
  }
}

export default movieReducer;