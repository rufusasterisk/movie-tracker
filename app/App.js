import React, { Component } from 'react';
import MovieIndex from './containers/movieIndex/MovieIndex';
import getRecentMovies from './utils/getRecentMovies';
import { displayMovies } from './containers/movieIndex/actions';
import {dispatch} from 'redux';

class App extends Component {
  constructor() {
    super();
  }

  // componentDidMount(){
  //   console.log(store);
  //   getRecentMovies()
  //     .then( thing => store.dispatch( displayMovies(thing) ) )
  // }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <MovieIndex />
        <h1>Movie Watcher</h1>
      </div>
    );
  }
}

export default App;