import React, { Component } from 'react';
import getRecentMovies from './utils/getRecentMovies';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    getRecentMovies()
      .then( promises => console.log(promises) )
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <h1>Movie Watcher</h1>
      </div>
    );
  }
}

export default App;