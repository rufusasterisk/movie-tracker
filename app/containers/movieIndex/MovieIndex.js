import React, { Component } from 'react';
import { connect } from 'react-redux';
import getRecentMovies from '../../utils/getRecentMovies';
import { displayMovies } from '../../actions/MovieIndexActions';
import PropTypes from 'prop-types';
import MovieCard from '../../components/MovieCard/MovieCard';
import {
  newAddToFavorites,
  newRemoveFromFavorites } from '../../actions/MovieCardActions';

class MovieIndex extends Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
  }

  generateCards(movieArray) {
    return movieArray.map( (movie) => {
      return (
        <MovieCard
          key={`CardID-${movie.id}`}
          movieID={movie.id}
          poster={movie.poster}
          title={movie.title}
          releaseDate={movie.release}
          voteAverage={movie.voteAvg}
          overview={movie.description}
          buttonClassName={movie.isFavorited ? "full-btn" : "empty-btn"}
          appropriateFunction={
            movie.isFavorited ?
              this.props.newRemoveFromFavorites :
              this.props.newAddToFavorites}
          userID={this.props.currentUserID} />
      );
    });
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
  movieArray: PropTypes.array,
  newAddToFavorites: PropTypes.func,
  newRemoveFromFavorites: PropTypes.func,
  currentUserID: PropTypes.number
};

const mapStateToProps = store => ({
  movieArray: store.displayMoviesReducer,
  currentUserID: store.currentUserID
});

const mapDispatchToProps = dispatch => ({
  newAddToFavorites: (actionProps) => {
    if (actionProps.userID === "") {
      alert('You must login in to favorite a movie!');
      return;
    }
    const theDispatchedObject = {
      movie_id: actionProps.movieID,
      user_id: actionProps.userID,
      title: actionProps.title,
      poster_path: actionProps.poster,
      release_date: actionProps.releaseDate,
      vote_average: actionProps.voteAverage,
      overview: actionProps.overview
    };
    dispatch(newAddToFavorites(theDispatchedObject));
  },
  newRemoveFromFavorites: (actionProps) => {
    const theDispatchedObject = {
      user_id: actionProps.userID,
      movie_id: actionProps.movieID
    };
    dispatch(newRemoveFromFavorites(theDispatchedObject));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
