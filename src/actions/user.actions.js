import { userConstants } from '../constants'
import { userService } from '../services'
import { alertActions } from './'
import { history } from '../helpers'

export const login = (email, password) => {
  const request = user => ({type: userConstants.LOGIN_REQUEST, payload: user})
  const success = user => ({type: userConstants.LOGIN_SUCCESS, payload: user})
  const failure = error => ({type: userConstants.LOGIN_FAILURE, payload: error})

  return dispatch => {
    dispatch(request({ email }))

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user))
          history.push('/')
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error(error))
        }
      )
  }
}

export const logout = () => {
  userService.logout()
  return {type: userConstants.LOGOUT}
}

export const getAll = () => {
  const request = () => ({type: userConstants.GETALL_REQUEST})
  const success = users => ({type: userConstants.GETALL_SUCCESS, payload: users})
  const failure = error => ({type: userConstants.GETALL_FAILURE, payload: error})

  return dispatch => {
    dispatch(request())

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      )
  }
}
