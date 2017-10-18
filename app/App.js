import React, { Component } from 'react';
import { connect } from 'react-redux'
import { grabMovies, displayMovies } from './containers/movieIndex/actions'
import MovieIndex from './containers/movieIndex/MovieIndex';
import getRecentMovies from './utils/getRecentMovies';
// import { displayMovies } from './containers/movieIndex/actions';
import {dispatch} from 'redux';

class App extends Component {
  constructor() {
    super();

  }

  componentDidMount(){
    getRecentMovies().then(movieArray => this.props.storeMovies(movieArray))
    // this.props.handleFetch()
  }

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
const mapDispatchToProps = dispatch => ({
  storeMovies: (array) => dispatch(displayMovies(array))
})

export default connect(undefined, mapDispatchToProps)(App);
