import '@testing-library/jest-dom';
import * as React from 'react'
import {render, screen} from '@testing-library/react';
import App from '../app';

test('Shows the different Hello World messages', () => {
  const helloWorldClassMessage      = 'Hello World - Class Component';
  const helloWorldFunctionalMessage = 'Hello World - Functional Component';
  const helloWorldPureMessage       = 'Hello World - Pure Component';

  render(<App />);

  expect(screen.getByText(helloWorldClassMessage)).toBeInTheDocument();
  expect(screen.getByText(helloWorldFunctionalMessage)).toBeInTheDocument();
  expect(screen.getByText(helloWorldPureMessage)).toBeInTheDocument();
});