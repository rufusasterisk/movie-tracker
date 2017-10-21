import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { addCardToFavorites, removeFromFavorites, increaseFavoriteCount, decreaseFavoriteCount } from './actions';

const mapStateToProps = store => ({
  currentUserName: store.currentUserName,
  favoritesCounter: store.favoritesCounter,
  movieArray: store.displayMoviesReducer,
  favorites: store.favorites,
  currentUserID: store.currentUserID,
  isFavorited: store.isFavorited
});

const mapDispatchToProps = dispatch => ({
  addCardToFavorites: (data) => {
    dispatch(addCardToFavorites(data))
  },
  removeFromFavorites: (data) => {
    dispatch(removeFromFavorites(data))
  },
  increaseFavoriteCount: (data) => {
    dispatch(increaseFavoriteCount(data))
  },
  decreaseFavoriteCount: (data) => {
    dispatch(decreaseFavoriteCount(data))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
