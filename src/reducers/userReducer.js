import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants/actionTypes';
import initialState from './initialState'

const userReducer = (state = initialState.user, { type, payload }) => {
  if (type === USER_LOGGED_IN) {
    return payload
  }
  if (type === USER_LOGGED_OUT) {
    return {}
  }
  return state
}

export default userReducer;