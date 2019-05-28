import { authHeader, handleResponse } from '../helpers'

export const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  return fetch(`${process.env.REACT_APP_API_HOST}/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      if (user.token)
        localStorage.setItem('user', JSON.stringify(user))

      return user
    })
}

export const logout = () => localStorage.removeItem('user')

export const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${process.env.REACT_APP_API_HOST}/users`, requestOptions).then(handleResponse)
}
