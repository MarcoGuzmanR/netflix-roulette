import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import movieDetailsReducer from './movieDetailsReducer';
import searchToggleReducer from './searchToggleReducer';

const mainReducer = combineReducers({
  moviesState: moviesReducer,
  movieDetailsState: movieDetailsReducer,
  searchToggleState: searchToggleReducer,
});

export default mainReducer;