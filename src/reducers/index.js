// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import newsReducer from './newsReducer';
 import userReducer from './userReducer';

 export default combineReducers({
     routing: routerReducer,
     news: newsReducer,
     user: userReducer,
 });