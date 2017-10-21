import { connect } from 'react-redux';
import FavoritesIndex from './FavoritesIndex';

const mapStateToProps = store => ({
  favorites: store.favorites,
  movieArray: store.displayMoviesReducer
});

export default connect(mapStateToProps, undefined)(FavoritesIndex);
