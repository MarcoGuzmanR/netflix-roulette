import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import moviesReducer from './moviesReducer';

const mainReducer = combineReducers({
  movieState:  movieReducer,
  moviesState: moviesReducer,
});

export default mainReducer;