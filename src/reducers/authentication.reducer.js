import { userConstants } from '../constants'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : {}

export const authentication= (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: {token: action.user.token, ...action.user.user}
      }

    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: {token: action.user.token, ...action.user.user}
      }

    case userConstants.LOGIN_FAILURE:
    case userConstants.LOGOUT:
      return {}

    default:
      return state
  }
}
