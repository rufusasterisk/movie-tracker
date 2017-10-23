import {combineReducers} from 'redux';
import displayMoviesReducer from '../reducers/movieIndexReducers';
import {
  favoritesCounter,
  favorites,
  updateIsFavorited } from '../reducers/MovieCardReducers';
import {
  loginRequested,
  loginFailure,
  loginSuccessful,
  currentUserID,
  currentUserName,
  createUserRequested,
  createUserFailure,
  createUserSuccess } from '../reducers/LoginReducers';

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
  updateIsFavorited });

export default rootReducer;
