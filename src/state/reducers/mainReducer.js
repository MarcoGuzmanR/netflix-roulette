import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const mainReducer = combineReducers({
  movie: movieReducer
});

export default mainReducer;