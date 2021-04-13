import '@testing-library/jest-dom';
import expect from 'expect';
import * as actions from '../state/constants/movies';
import moviesReducer from '../state/reducers/moviesReducer';

const MOVIE = { id: 1, title: 'Movie' };

describe('Movies reducer', () => {
  it ('returns the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual({ movies: [] });
  });

  it ('loads the movies with one movie', () => {
    const loadAction = {
      type: actions.LOAD_MOVIES,
      payload: [MOVIE]
    };

    expect(moviesReducer({}, loadAction)).toEqual({ movies: [{ id: 1, title: 'Movie' }] });
  });

  it ('sorts the movies with one movie', () => {
    const sortsAction = {
      type: actions.SORT_MOVIES,
      payload: [MOVIE]
    };

    expect(moviesReducer({}, sortsAction)).toEqual({ movies: [{ id: 1, title: 'Movie' }] });
  });

  it ('filters the movies with one movie', () => {
    const filtersAction = {
      type: actions.FILTER_MOVIES,
      payload: [MOVIE]
    };

    expect(moviesReducer({}, filtersAction)).toEqual({ movies: [{ id: 1, title: 'Movie' }] });
  });

  it ('adds a new movie', () => {
    const NEW_MOVIE = { id: 2, title: 'New Movie' };

    const addMovieAction = {
      type: actions.ADD_MOVIE,
      payload: NEW_MOVIE
    };

    expect(moviesReducer({ movies: [{ id: 1, title: 'Movie' }] }, addMovieAction))
      .toEqual({ movies: [{ id: 2, title: 'New Movie' }, { id: 1, title: 'Movie' }] });
  });

  it ('updates a movie', () => {
    const MOVIE = { id: 1, title: 'Movie Updated' };

    const updateMovieAction = {
      type: actions.UPDATE_MOVIE,
      payload: MOVIE
    };

    expect(moviesReducer({ movies: [{ id: 1, title: 'Movie' }] }, updateMovieAction))
      .toEqual({ movies: [{ id: 1, title: 'Movie Updated' }] });
  });

  it ('deletes a movie', () => {
    const MOVIE = { id: 1, title: 'Movie' };

    const deleteMovieAction = {
      type: actions.DELETE_MOVIE,
      payload: MOVIE.id 
    };

    expect(moviesReducer({ movies: [{ id: 1, title: 'Movie' }] }, deleteMovieAction))
      .toEqual({ movies: [] });
  });
});