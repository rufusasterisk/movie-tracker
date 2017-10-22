import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabMovies, displayMovies } from './containers/movieIndex/actions';
import MovieIndex from './containers/movieIndex/MovieIndex';
import FavoritesIndexContainer from './components/Favorites/FavoritesIndexContainer';
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

  routeToFavorites() {
    console.log('are we routing');
    return <Route path="/favorites" component={FavoritesIndexContainer} />
  }

// when they click on the Favorites button, I want to :
// {/* <Route path="/favorites" component={FavoritesIndexContainer} /> */}

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
  //favorites: PropTypes.set
};

const mapStateToProps = store => ({
  favorites: store.favorites
})

const mapDispatchToProps = dispatch => ({
  handleFetch: () => dispatch(grabMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
