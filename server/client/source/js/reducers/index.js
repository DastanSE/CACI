import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import jobReducer from './jobReducer';
import newsReducer from './newsReducer';
import repertoireReducer from './repertoireReducer';
import articleReducer from './articleReducer';
// import app from 'reducers/app';

export default combineReducers({
  fetchedEvents: eventReducer,
  jobs: jobReducer,
  news: newsReducer,
  repertoire: repertoireReducer,
  article: articleReducer,
});
