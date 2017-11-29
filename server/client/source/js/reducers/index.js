import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
// import app from 'reducers/app';

export default combineReducers({
  fetchedEvents: eventReducer,
});
