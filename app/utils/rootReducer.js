import {combineReducers} from 'redux';
import displayMoviesReducer from '../containers/movieIndex/reducer';
import {
  loginRequested,
  loginFailure,
  loginSuccessful } from '../components/Login/reducers';

const rootReducer = combineReducers({
  displayMoviesReducer,
  loginRequested,
  loginFailure,
  loginSuccessful
});

export default rootReducer;
