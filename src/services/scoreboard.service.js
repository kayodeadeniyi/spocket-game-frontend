import { authHeader, handleResponse } from '../helpers'

export const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${process.env.REACT_APP_API_HOST}/games`, requestOptions).then(handleResponse)
}
