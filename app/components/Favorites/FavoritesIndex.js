import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieCardContainer from '../MovieCard/MovieCardContainer';
import MovieCard from '../MovieCard/MovieCard';

class FavoritesIndex extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  generateFavoriteMovies() {
    const { favorites, movieArray } = this.props;
    const favoritesArray = [...favorites];

    return favoritesArray.map(favorite => {
      return movieArray.reduce((acc, movie) => {
        if (movie.id === favorite.movie_id) {
          acc[movie.id] = movie;
        }
        return acc;
      }, {});
    });
  }

  // generateCards() {
  //   const favoriteMovies = this.generateFavoriteMovies();
  //
  //   const movieData = favoriteMovies.map(movie => {
  //     return Object.values(movie);
  //   });
  //
  //   return movieData.map(movie => (
  //     <MovieCardContainer
  //       key={`FaveID-${movie[0].id}`}
  //       title={movie[0].title}
  //       description={movie[0].description}
  //       voteAvg={movie[0].voteAvg}
  //       poster={movie[0].poster}
  //       backdrop={movie[0].backdrop}
  //       movieID={movie[0].id}
  //       release={movie[0].release}
  //       isFavorited={true} />
  //   ));
  // }

  generateCards(movieArray) {
    // console.log(this.props);
    return movieArray.map( (movie) => {
      console.log(movie);
      // const className = movie.i
      return (
        <MovieCard
          key={`CardID-${movie.movie_id}`}
          movieID={movie.movie_id}
          poster={movie.poster_path}
          title={movie.title}
          releaseDate={movie.release}
          voteAverage={movie.vote_average}
          overview={movie.overview}
          buttonClassName={movie.isFavorite ? "full-btn" : "empty-btn"}
          appropriateFunction={
            movie.isFavorite ?
              this.props.newRemoveFromFavorites :
              this.props.newAddToFavorites}
          userID={this.props.currentUserID} />
      );
    });
  }

  render() {
    const { movieArray } = this.props;
    const mappedFavoriteCards = movieArray.length
      ? this.generateCards(this.props.favorites)
      : null;

    return (
      <div className="favorites-page">
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
        <footer className="favorites-footer"></footer>
      </div>
    );
  }

}

FavoritesIndex.propTypes = {
  favorites: PropTypes.array,
  movieArray: PropTypes.array,
  currentUserID: PropTypes.number,
  newAddToFavorites: PropTypes.func,
  newRemoveFromFavorites: PropTypes.func
};

export default FavoritesIndex;
