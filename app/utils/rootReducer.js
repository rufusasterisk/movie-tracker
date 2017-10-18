import {combineReducers} from 'redux';
import displayMoviesReducer from '../containers/movieIndex/reducer';

const rootReducer = combineReducers({
  displayMoviesReducer
});

export default rootReducer;