import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import moviesReducer from './moviesReducer';
import movieDetailsReducer from './movieDetailsReducer';
import searchToggleReducer from './searchToggleReducer';

const mainReducer = combineReducers({
  movieState:  movieReducer,
  moviesState: moviesReducer,
  movieDetailsState: movieDetailsReducer,
  searchToggleState: searchToggleReducer,
});

export default mainReducer;