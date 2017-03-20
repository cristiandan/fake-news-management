import { getAllNewsSites } from '../services/dataService'
import { login } from '../services/fbService'

import { 
  GET_NEWS_PROCESSING, 
  GET_NEWS_SUCCESS, 
  PROCESSING_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
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
         login()
            .then(
                res => dispatch({ type: SUCCESS_LOGIN, payload: res }),
                err => dispatch({ type: FAIL_LOGIN, payload: err })
            );
      };
    };