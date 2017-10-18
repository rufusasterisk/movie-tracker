import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import MovieIndex from './containers/movieIndex';
import { createStore } from 'redux';
import rootReducer from './utils/rootReducer';

const devTools = 
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('main'))
