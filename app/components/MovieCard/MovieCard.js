import React from 'react';

const MovieCard = ({
  title,
  description,
  voteAvg 
}) => {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <ul>
        <li>{description}</li>
        <li>{voteAvg}</li>
      </ul>
    </div>
  );
};

export default MovieCard;