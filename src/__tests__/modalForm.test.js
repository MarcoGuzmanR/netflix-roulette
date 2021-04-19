import '@testing-library/jest-dom';
import * as React from 'react'
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ModalMovieForm from '../components/modals/movieForm';

test('Displays the add form modal', async () => {
  const newMovie = {
    title: 'New movie',
    release_date: '2021-01-01',
    poster_path: 'http://www.img.com',
    genres: 'Drama, Comedy',
    overview: 'New movie overview text',
    runtime: '100'
  };
  const mockStore = configureMockStore();
  const store = mockStore({
    moviesState: {
      movies: []
    }
  });

  const show = true;
  const setShow = jest.fn();

  render(
    <Provider store={store}>
      <ModalMovieForm showModal={show} setShowModal={setShow} />
    </Provider>
  );

  userEvent.type(screen.getByText(/title/i), newMovie.title);
  userEvent.type(screen.getByText(/release date/i), newMovie.release_date);
  userEvent.type(screen.getByText(/movie url/i), newMovie.poster_path);
  userEvent.type(screen.getByText(/genres/i), newMovie.genres);
  userEvent.type(screen.getByText(/overview/i), newMovie.overview);
  userEvent.type(screen.getByText(/runtime/i), newMovie.runtime);


  act(async () => {
    await userEvent.click(screen.getByText(/submit/i))
    console.log(await store.getState());
  });


  screen.debug();
});