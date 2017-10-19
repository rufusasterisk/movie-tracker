import {combineReducers} from 'redux';
import displayMoviesReducer from '../containers/movieIndex/reducer';
import {
  loginRequested,
  loginFailure,
  loginSuccessful,
  currentUserID,
  currentUserName} from '../components/Login/reducers';

const rootReducer = combineReducers({
  displayMoviesReducer,
  loginRequested,
  loginFailure,
  loginSuccessful,
  currentUserID,
  currentUserName
});

export default rootReducer;
