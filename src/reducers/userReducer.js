import { USER_LOGGED_IN, USER_LOGGED_IN_FAIL } from '../constants/actionTypes';
import initialState from './initialState'

const userReducer = (state = initialState.user, { type, payload }) => {
  if (type === USER_LOGGED_IN) {
    return payload
  }
  if (type === USER_LOGGED_IN_FAIL) {
    return {}
  }
  return state
}

export default userReducer;