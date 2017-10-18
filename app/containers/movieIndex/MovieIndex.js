import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import {connect} from 'react-redux';
import getRecentMovies from '../../utils/getRecentMovies';
import {displayMovies} from './actions';

const MovieIndex = ( { movieArray = [] } ) => {
  const mappedMovieCards = movieArray.map( movie => {
    return (
      <MovieCard 
        title={movie.title}
        description={movie.description}
        voteAvg={movie.voteAvg} />
    );
  });

  componentDidMount(){
    console.log(movieArray);
    getRecentMovies()
      .then( thing => store.dispatch( displayMovies(thing) ) )
  }

  return (
    <div>
      {mappedMovieCards}
    </div>
  );
}

const mapStateToProps = store => ({
  movieArray: store.movieArray
});

export default connect(mapStateToProps, undefined)(MovieIndex);