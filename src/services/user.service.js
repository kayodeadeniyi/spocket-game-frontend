import { authHeader } from '../helpers'

const API_HOST = 'http://localhost:3000'

export const login = (email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  return fetch(`${API_HOST}/authenticate`, requestOptions)
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

  return fetch(`${API_HOST}/users`, requestOptions).then(handleResponse)
}

const handleResponse = (response) => {
  return response.json().then(myJson => {
    if (!response.ok) {
      const error = (myJson && myJson.error) || response.statusText
      return Promise.reject(error)
    }

    return Promise.resolve(myJson)
  })
}
