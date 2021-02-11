import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const helloWorldCreate = React.createElement(
  'h3',
  {},
  'Hello World - Create Element'
);

ReactDOM.render(helloWorldCreate, document.getElementById('hello-world-react'));