import { getAllNewsSites } from '../services/dataService'

import { 
  GET_NEWS_REQUEST, 
  GET_NEWS_SUCCESS, 
} from '../constants/actionTypes'

export function getNewsRequest() {
  console.log('request');
  return {
    type: GET_NEWS_REQUEST
  }
}

export function getNewsSuccess(data) {
  console.log('get news success', data);
  return {
    type: GET_NEWS_SUCCESS,
    news: data.Items
  }
}

export function fetchNews() {
  console.log('enter fetch');
    return function(dispatch) {
        dispatch(getNewsRequest())

        return getAllNewsSites()
            .then(data => 
                dispatch(getNewsSuccess(data))
            )
            .catch(err =>
                console.error('error', err)
            )
    }
}