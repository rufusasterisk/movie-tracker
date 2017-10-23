import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabMovies, displayMovies } from './actions/MovieIndexActions';
import MovieIndex from './containers/MovieIndex/MovieIndex';
import FavoritesIndexContainer from
  './components/Favorites/FavoritesIndexContainer';
import User from './components/User/User';
import getRecentMovies from './utils/getRecentMovies';
import { dispatch } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './main.scss';

class App extends Component {
  constructor() {
    super();

  }

  componentDidMount(){
    this.props.handleFetch();
  }

  render() {
    return (
      <div>
        <nav className="nav-bar">
          <h1 className="app-title">Movie Tracker</h1>
          <section className="nav-btns">
            <button className="see-all-movies-btn">All Movies</button>
            <Link
              className="see-favorites-btn"
              to="/favorites">Favorites </Link>
            <User />
          </section>
        </nav>

        <main>
          <article className="card-index">
            <MovieIndex />
          </article>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  handleFetch: PropTypes.func
};

const mapStateToProps = store => ({
  favorites: store.favorites
});

const mapDispatchToProps = dispatch => ({
  handleFetch: () => dispatch(grabMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
