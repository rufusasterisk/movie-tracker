import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/MovieCardActions';

class MovieCard extends Component {
  constructor() {
    super();

  }

  render() {
    const { poster, buttonClassName, appropriateFunction } = this.props;
    return (
      <div className="movie-card">
        <img
          className="poster-img"
          src={`http://image.tmdb.org/t/p/w500${poster}`} />
        <div
          className={buttonClassName}
          onClick={ () => appropriateFunction(this.props)}></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  poster: PropTypes.string,
  buttonClassName: PropTypes.string,
  appropriateFunction: PropTypes.func
};

export default MovieCard;
