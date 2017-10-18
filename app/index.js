import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import MovieIndex from './containers/movieIndex';
import { createStore } from 'redux';

const devTools = 
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, document.getElementById('main'))
