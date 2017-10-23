import React, { Component } from 'react';
import PropTypes from 'react';
import MovieCardContainer from '../MovieCard/MovieCardContainer';
import * as actions from './actions';
import { Link } from 'react-router-dom';

class FavoritesIndex extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    this.props.getTheFavorites();
  }


  getFavorites() {
    const { currentUserID } = this.props;
    console.log(this.props.getTheFavorites);
    this.props.getFavorites(currentUserID);
  }

  generateCards() {
    const favoriteMovies = this.getFavorites();
    console.log(favoriteMovies);

    return favoriteMovies.map(movie => (
       <MovieCardContainer
          key={`FaveID-${movie.id}`}
          title={movie.title}
          description={movie.description}
          voteAvg={movie.voteAvg}
          poster={movie.poster}
          backdrop={movie.backdrop}
          movieID={movie.id}
          release={movie.release}
          isFavorited={true} />
    ));
  }

  render() {
    const favoriteMovies = this.getFavorites();
    const { movieArray } = this.props;
    const mappedFavoriteCards = favoriteMovies
      ? this.generateCards()
      : null;

    return (
      <div>
        <nav className="nav-bar">
          <h1 className="app-title">Movie Tracker</h1>
          <section className="nav-btns">
            <Link
              className="see-all-movies-btn"
              to="/">All Movies </Link>
            <button className="see-favorites-btn">Favorites</button>
        </section>
        </nav>

        <h2 className="current-title">Favorites</h2>
        <section className="movie-index">
          {mappedFavoriteCards}
        </section>
      </div>
    );
  }

}

export default FavoritesIndex;


// generateFavoriteMovies() {
//   const { favorites, movieArray } = this.props;
//   const favoritesArray = [...favorites];
//
//   return favoritesArray.map(favorite => {
//     return movieArray.reduce((acc, movie) => {
//       if (movie.id === favorite) {
//         acc[movie.id] = movie;
//       };
//       return acc;
//     }, {});
//   });
// }
