import '@testing-library/jest-dom';
import * as React from 'react'
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom'
import NotFound from '../components/movieNotFound/notFound';

test('Shows the not found page message for a wrong movie page', () => {
  const history = createMemoryHistory()
  history.push('/movie-not-found');

  render(
    <Router history={history}>
      <NotFound />
    </Router>
  );

  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByText(/go back to home/i)).toBeInTheDocument();
});