import { connect } from 'react-redux';
import FavoritesIndex from './FavoritesIndex';
// import { addCardToFavorites, removeFromFavorites, increaseFavoriteCount, decreaseFavoriteCount, toggleIsFavorited } from './actions';

const mapStateToProps = store => ({
  favorites: store.favorites,
  movieArray: store.displayMoviesReducer
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesIndex);
