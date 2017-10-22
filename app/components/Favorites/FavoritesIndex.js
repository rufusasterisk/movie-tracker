import React, { Component } from 'react';
import PropTypes from 'react';
import MovieCardContainer from '../MovieCard/MovieCardContainer';
import * as actions from './actions';

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
        if (movie.id === favorite) {
          acc[movie.id] = movie;
        };
        return acc;
      }, {});
    });
  }

  generateCards() {
    const favoriteMovies = this.generateFavoriteMovies();

    const movieData = favoriteMovies.map(movie => {
      return Object.values(movie);
    })

    return movieData.map(movie => (
       <MovieCardContainer
          key={`FaveID-${movie[0].id}`}
          title={movie[0].title}
          description={movie[0].description}
          voteAvg={movie[0].voteAvg}
          poster={movie[0].poster}
          backdrop={movie[0].backdrop}
          movieID={movie[0].id}
          release={movie[0].release}
          isFavorited={true} />
    ));
  }

  render() {
    const { movieArray } = this.props;
    const mappedFavoriteCards = movieArray.length
      ? this.generateCards()
      : null;

    return (
      <div>
        <h2 className="current-title">Favorites</h2>
        <section className="movie-index">
          {mappedFavoriteCards}
        </section>
      </div>
    );
  }

}

export default FavoritesIndex;
