import { connect } from 'react-redux';
import FavoritesIndex from './FavoritesIndex';
import { getFavorites, getTheFavorites } from './actions';
const mapStateToProps = store => ({
  favorites: store.favorites,
  movieArray: store.displayMoviesReducer,
  currentUserID: store.currentUserID
});

const mapDispatchToProps = dispatch => ({
  getFavorites: (data) => {
    dispatch(getFavorites(data))
  },
  getTheFavorites: (data) => {
    dispatch(getTheFavorites(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesIndex);
