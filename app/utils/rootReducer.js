import {combineReducers} from 'redux';
import displayMoviesReducer from '../containers/movieIndex/reducer';
import { getFavorites } from '../components/Favorites/reducers';
import { favoritesCounter, favorites, updateIsFavorited } from '../components/MovieCard/reducers';
import {
  loginRequested,
  loginFailure,
  loginSuccessful,
  currentUserID,
  currentUserName,
  createUserRequested,
  createUserFailure,
  createUserSuccess } from '../components/Login/reducers';

const rootReducer = combineReducers({
  displayMoviesReducer,
  loginRequested,
  loginFailure,
  loginSuccessful,
  currentUserID,
  currentUserName,
  createUserRequested,
  createUserFailure,
  createUserSuccess,
  favoritesCounter,
  favorites,
  updateIsFavorited,
  getFavorites });

export default rootReducer;
