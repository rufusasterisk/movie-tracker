import { connect } from 'react-redux';
import FavoritesIndex from './FavoritesIndex';
// import { addCardToFavorites, removeFromFavorites, increaseFavoriteCount, decreaseFavoriteCount, toggleIsFavorited } from './actions';

const mapStateToProps = store => ({
  favorites: store.favorites,
  movieArray: store.displayMoviesReducer
});

export default connect(mapStateToProps, undefined)(FavoritesIndex);
