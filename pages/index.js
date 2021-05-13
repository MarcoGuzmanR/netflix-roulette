import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import mainReducer from './state/reducers/mainReducer';

const store = createStore(mainReducer);

function MainApp() {
  return (
  <Provider store={store}>
    <App />
  </Provider>
  )
}

export default MainApp;