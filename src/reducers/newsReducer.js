import { 
  GET_NEWS_PROCESSING, 
  GET_NEWS_SUCCESS, 
  EDITING_SITE,
  SAVE_SITE,
} from '../constants/actionTypes'

import initialState from './initialState'

export default function newsReducer(state = initialState.newsState, action) {
    switch (action.type){
        case GET_NEWS_PROCESSING:
            return {
                ...state,
                loading: true,
            }
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                newsData: action.payload,
                loading: false,
            }
        case EDITING_SITE:
            return {
                ...state,
                newsData: [
                    ...state.newsData.slice(0, action.payload),
                    {
                        ...state.newsData[action.payload],
                        editing: true
                    },
                    ...state.newsData.slice(action.payload+1),
                ]
            }
        case SAVE_SITE:
            return {
                ...state,
                newsData: [
                    ...state.newsData.slice(0, action.payload.index),
                    {
                        ...state.newsData[action.payload.index],
                        editing: false,
                        ...action.payload.site
                    },
                    ...state.newsData.slice(action.payload.index+1),
                ]
            }
        default:
            return state;
    }
}