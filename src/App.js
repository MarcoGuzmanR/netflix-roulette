import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldClass from './HelloWorldClass';
import HelloWorldPure from './HelloWorldPure';
import HelloWorldFunctional from './HelloWorldFunctional';

function App() {
  return (
    <>
      <HelloWorldClass />
      <HelloWorldPure />
      <HelloWorldFunctional />
    </>
  );
}

const helloWorldCreate = React.createElement(
  'h3',
  {},
  'Hello World - Create Element'
);

ReactDOM.render(helloWorldCreate, document.getElementById('hello-world-react'));

export default App;