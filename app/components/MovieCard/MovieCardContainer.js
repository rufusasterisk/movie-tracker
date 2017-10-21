import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const mapStateToProps = store => ({
  currentUserName: store.currentUserName,
  favoritesCounter: store.favoritesCounter,
  movieArray: store.displayMoviesReducer,
  favorites: store.favorites,
  currentUserID: store.currentUserID
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: (data) => {
    dispatch(addToFavorites(data))
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
