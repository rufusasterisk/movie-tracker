import React, { Component } from 'react';
import MovieCardContainer from '../../components/MovieCard/MovieCardContainer';
import { connect } from 'react-redux';
import getRecentMovies from '../../utils/getRecentMovies';
import { displayMovies } from './actions';
import PropTypes from 'prop-types';

class MovieIndex extends Component {
  constructor() {
    super();
  }

  generateCards(movieArray) {
    return movieArray.map(movie => (
      <MovieCardContainer
        key={`CardID-${movie.id}`}
        title={movie.title}
        description={movie.description}
        voteAvg={movie.voteAvg}
        poster={movie.poster}
        backdrop={movie.backdrop}
        movieID={movie.id}
        release={movie.release}
        isFavorited={movie.isFavorited} />
    ));
  }

  render() {
    const { movieArray } = this.props;
    const mappedMovieCards = this.props.movieArray.length
      ? this.generateCards(movieArray)
      : null;

    return (
      <div className="movie-index-container">
        <h2 className="current-title">All Movies</h2>
        <section className="movie-index">
          {mappedMovieCards}
        </section>
        <footer className="movie-index-footer"></footer>
      </div>
    );
  }
}

MovieIndex.propTypes = {
  movieArray: PropTypes.array
};

const mapStateToProps = store => ({
  movieArray: store.displayMoviesReducer
});

export default connect(mapStateToProps, undefined)(MovieIndex);
