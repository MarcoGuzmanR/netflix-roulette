import '@testing-library/jest-dom';
import * as React from 'react'
import {render, screen} from '@testing-library/react';
import App from '../app';

test('Shows the home page welcome message', () => {
  const homePage = 'Netflix Roulette - Home Page';

  render(<App />);

  expect(screen.getByText(homePage)).toBeInTheDocument();
});