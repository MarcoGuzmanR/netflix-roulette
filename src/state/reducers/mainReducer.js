import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import moviesReducer from './moviesReducer';
import searchToggleReducer from './searchToggleReducer';

const mainReducer = combineReducers({
  movieState:  movieReducer,
  moviesState: moviesReducer,
  searchToggleState: searchToggleReducer,
});

export default mainReducer;