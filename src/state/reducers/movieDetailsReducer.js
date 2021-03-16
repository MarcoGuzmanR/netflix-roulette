import { SET_MOVIE } from '../constants/movieDetails';

const initialState = {
  movieDetails: {}
}

function movieDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movieDetails: action.movie
      }
    default:
      return state;
  }
}

export default movieDetailsReducer;