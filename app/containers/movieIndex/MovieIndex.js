import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import {connect} from 'react-redux';
import getRecentMovies from '../../utils/getRecentMovies';
import {displayMovies} from './actions';

class MovieIndex extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }

  generateCards(movieArray) {
  return movieArray.map( movie => (
          <MovieCard
            title={movie.title}
            description={movie.description}
            voteAvg={movie.voteAvg} />
        ))
  }

  render() {
    const { movieArray } = this.props;
    const mappedMovieCards = this.props.movieArray.length
       ? this.generateCards(movieArray)
       : null

    return (
      <div>
        {mappedMovieCards}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  movieArray: store.displayMoviesReducer

});

export default connect(mapStateToProps, undefined)(MovieIndex);
