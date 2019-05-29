import { authHeader, handleResponse } from '../helpers'

export const getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${process.env.REACT_APP_API_HOST}/games`, requestOptions).then(handleResponse)
}

export const submitGameResult = (game_params) => {
  console.log(game_params, 'Hello')
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify({game: game_params})
  }

  return fetch(`${process.env.REACT_APP_API_HOST}/games`, requestOptions).then(handleResponse)
}
