import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.css'

const MovieCard = ({
  title,
  description,
  voteAvg,
  poster,
  backdrop
}) => {
  return (
    <div className="movie-card">
      <img src={`http://image.tmdb.org/t/p/w500${poster}`} />
      <h3>{title}</h3>
      <ul>
        <li>{description}</li>
        <li>{voteAvg}</li>
      </ul>
      <img src={`http://image.tmdb.org/t/p/w1920${backdrop}`} />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  voteAvg: PropTypes.number,
  poster: PropTypes.string,
  backdrop: PropTypes.string
};

export default MovieCard;
