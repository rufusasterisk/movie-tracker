import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

export default class MovieIndex extends Component {
  constructor() {
    super();
  }

  const mappedMovieCards = movieArray.map( movie => {
    return (
      <MovieCard 
        title={movie.title}
        description={movie.description}
        voteAvg={movie.voteAvg} />
    )
  })

  render() {
    return (
      <div>
        {mappedMovieCards}
      </div>
    );
  }
}
