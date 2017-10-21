import React, { Component } from 'react';
import PropTypes from 'react';
import * as actions from './actions';

class FavoritesIndex extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  generateCards() {
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

  render() {
    const { movieArray } = this.props;
    this.generateCards();
    const mappedFavoriteCards = movieArray.length
      ? this.generateCards()
      : null;

    return (
      <div>
        {mappedFavoriteCards}
      </div>
    );
  }

}

export default FavoritesIndex;
