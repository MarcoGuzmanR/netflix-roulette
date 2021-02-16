import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldClass from './hello-world-class';
import HelloWorldPure from './hello-world-pure';
import HelloWorldFunctional from './hello-world-functional';

function App() {
  return (
    <>
      <HelloWorldClass />
      <HelloWorldPure />
      <HelloWorldFunctional />
    </>
  );
}

export default App;