import { getAllNewsSites } from '../services/dataService'

export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST"
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS"

export function getNewsRequest() {
  return {
    type: GET_NEWS_REQUEST
  }
}

export function getNewsSuccess(data) {
  return {
    type: GET_NEWS_SUCCESS,
    components: data
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
    }
}