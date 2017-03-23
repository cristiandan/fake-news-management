import { getAllNewsSites } from '../services/dataService'
import { getStatus } from '../services/fbService'

import { 
  GET_NEWS_PROCESSING, 
  GET_NEWS_SUCCESS, 
  PROCESSING_LOGIN,
  USER_LOGGED_IN,
  USER_LOGGED_IN_FAIL,
  EDITING_SITE,
  SAVE_SITE
} from '../constants/actionTypes'

export const fetchUserData = () => {
  
}

export const fetchNews = () => {
    return dispatch => {
        dispatch({ type: GET_NEWS_PROCESSING })

        return getAllNewsSites()
            .then(data => 
                dispatch({ type: GET_NEWS_SUCCESS, payload: data.Items })
            )
            .catch(err =>
                console.error('error', err)
            )
    }
}

export const logIn = () => {
      return dispatch => {
         dispatch({ type: PROCESSING_LOGIN });
         getStatus()
            .then(
                res => dispatch({ type: USER_LOGGED_IN, payload: res }),
                err => dispatch({ type: USER_LOGGED_IN_FAIL, payload: err })
            );
      };
    };

export const editSite = (index) => {
    return {
        type: EDITING_SITE,
        payload: index
    }
}

export const saveSite = (index, site) => {
    // dispatch api 
    return {
        type: SAVE_SITE,
        payload: {index, site}
    }
}