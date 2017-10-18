import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabMovies, displayMovies } from './containers/movieIndex/actions';
import MovieIndex from './containers/movieIndex/MovieIndex';
import getRecentMovies from './utils/getRecentMovies';
import {dispatch} from 'redux';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();

  }

  componentDidMount(){
    // getRecentMovies().then(movieArray => this.props.storeMovies(movieArray))
    this.props.handleFetch();
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

App.propTypes = {
  handleFetch: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  // storeMovies: (array) => dispatch(displayMovies(array))
  handleFetch: () => dispatch(grabMovies())
});

export default connect(undefined, mapDispatchToProps)(App);
