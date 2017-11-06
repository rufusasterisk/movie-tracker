import { connect } from 'react-redux';
import FavoritesIndex from './FavoritesIndex';
import {
  newRemoveFromFavorites,
  newAddToFavorites } from '../../actions/MovieCardActions';

const mapStateToProps = store => ({
  favorites: store.favorites,
  movieArray: store.displayMoviesReducer,
  currentUserID: store.currentUserID
});

const mapDispatchToProps = dispatch => ({
  newAddToFavorites: (actionProps) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesIndex);
