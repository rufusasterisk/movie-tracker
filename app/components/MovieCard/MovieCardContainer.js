import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import {
  addCardToFavorites,
  removeFromFavorites,
  increaseFavoriteCount,
  decreaseFavoriteCount,
  updateIsFavorited,
  addToFavorites } from './actions';

const mapStateToProps = store => ({
  currentUserName: store.currentUserName,
  favoritesCounter: store.favoritesCounter,
  movieArray: store.displayMoviesReducer,
  favorites: store.favorites,
  currentUserID: store.currentUserID
});

const mapDispatchToProps = dispatch => ({
  addCardToFavorites: (info) => {
    dispatch(addCardToFavorites(info));
  },
  removeFromFavorites: (info) => {
    dispatch(removeFromFavorites(info));
  },
  increaseFavoriteCount: (info) => {
    dispatch(increaseFavoriteCount(info));
  },
  decreaseFavoriteCount: (info) => {
    dispatch(decreaseFavoriteCount(info));
  },
  updateIsFavorited: (info) => {
    dispatch(updateIsFavorited(info));
  },
  addToFavorites: (info) => {
    dispatch(addToFavorites(info));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
