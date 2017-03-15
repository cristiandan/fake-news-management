// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import newsReducer from './newsReducer';

 export default combineReducers({
     routing: routerReducer,
     news: newsReducer
 });