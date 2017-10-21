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
    //console.log('in generateFavoriteMovies');
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

    return movieData.map(movie => {
      console.log('movieData map', movie[0].id);
      return <MovieCardContainer
          key={`FaveID-${movie[0].id}`}
          title={movie[0].title}
          description={movie[0].description}
          voteAvg={movie[0].voteAvg}
          poster={movie[0].poster}
          backdrop={movie[0].backdrop}
          movieID={movie[0].id}
          release={movie[0].release}
          isFavorited={true} />
    });
    // return favoriteMovies.map(movie => (
    // //  const uniqueMovieID = Object.keys(movie);
    //   //console.log('movie inside map:', movie);
    //   <MovieCardContainer
    //     key={`CardID-${movie.id}`}
    //     title={movie.title}
    //     description={movie.description}
    //     voteAvg={movie.voteAvg}
    //     poster={movie.poster}
    //     backdrop={movie.backdrop}
    //     movieID={movie.id}
    //     release={movie.release}
    //     isFavorited={true} />
    //   ));
  }

  render() {
    const { movieArray } = this.props;
    const mappedFavoriteCards = movieArray.length
      ? this.generateCards()
      : null;
    //const mappedFavoriteCards = this.generateCards();

    return (
      <div>
        <h1>BEGINNING OF FAVES</h1>
        {mappedFavoriteCards}
        <h1>END OF FAVES</h1>
      </div>
    );
  }

}

export default FavoritesIndex;
