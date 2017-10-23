import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';

class MovieCard extends Component {
  constructor() {
    super();

  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  checkIfFavorited = () => {
    const { currentUserID, movieArray, updateIsFavorited, movieID } = this.props;
    if (currentUserID === '') {
      alert('You have to be logged in to favorite a movie!');
      //re-route to login page
    } else {
      this.addToFavorites();
      const findNewFavorite = movieArray.find(movie => {
        return movieID === movie.id;
      });
      const favoritedIndex = movieArray.indexOf(findNewFavorite);
      const newMovieArray = [...movieArray];
      newMovieArray[favoritedIndex].isFavorited = !movieArray[favoritedIndex].isFavorited;
      updateIsFavorited(newMovieArray);
    }
  };

  addToFavorites = () => {
    const {
      currentUserID,
      poster,
      voteAvg,
      description,
      movieID,
      release,
      title,
      isFavorited } = this.props;

    this.props.addCardToFavorites({
      user_id: currentUserID,
      poster_path: poster,
      vote_average: voteAvg,
      overview: description,
      movie_id: movieID,
      release_date: release,
      title,
      isFavorited: true
    });
    this.props.addToFavorites({
      user_id: currentUserID,
      poster_path: poster,
      vote_average: voteAvg,
      overview: description,
      movie_id: movieID,
      release_date: release,
      title,
      isFavorited: true
    });
  };

  // // const removeFromFavorites = () => {
  // //   decreaseFavoriteCount();
  // // }

  favorited = () => {
    const { poster } = this.props;
    return (
      <div className="movie-card">
        <img
          className="poster-img"
          src={`http://image.tmdb.org/t/p/w500${poster}`} />
        <div
          className="full-btn"
          onClick={this.checkIfFavorited}></div>
      </div>
    );
  }

  notFavorited = () => {
    const { poster } = this.props;
    return (
      <div className="movie-card">
        <img
          className="poster-img"
          src={`http://image.tmdb.org/t/p/w500${poster}`} />
        <div
          className="empty-btn"
          onClick={this.checkIfFavorited}></div>
      </div>
    );
  }

  render() {
    const { favorites, movieID } = this.props;
    const isFavorited = favorites.find( fav => fav === movieID);
    const typeCard = isFavorited ? this.favorited() : this.notFavorited();

    return (

      <div>
        {typeCard}
      </div>
    );
  }

}

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  voteAvg: PropTypes.number,
  poster: PropTypes.string,
  backdrop: PropTypes.string,
  currentUserID: PropTypes.number,
  movieID: PropTypes.number,
  release: PropTypes.string,
  addToFavorites: PropTypes.func,
  addCardToFavorites: PropTypes.func,
  isFavorited: PropTypes.func,
  favorites: PropTypes.array
};


export default MovieCard;


// {/* <h3>{title}</h3>
// <ul>
// <li><button onClick={checkIfFavorited}>FAVE</button></li>
// <li>{description}</li>
// <li>{voteAvg}</li>
// </ul> */}
// {/* <img src={`http://image.tmdb.org/t/p/w1920${backdrop}`} /> */}
