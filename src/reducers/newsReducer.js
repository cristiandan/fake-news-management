import { 
  GET_NEWS_REQUEST, 
  GET_NEWS_SUCCESS, 
} from '../constants/actionTypes'

import initialState from './initialState'

console.log('init', initialState.newsState);

export default function newsReducer(state = initialState.newsState, action) {
    switch (action.type){
        case GET_NEWS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news: action.news,
                loading: false,
            }
        default:
            return state;
    }
}