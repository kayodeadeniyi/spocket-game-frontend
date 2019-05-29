import { scoreboardConstants } from '../constants'
import { scoreboardService } from '../services'

import { alertActions } from './'

export const getAll = () => {
  const request = () => ({type: scoreboardConstants.GETALL_REQUEST})
  const success = scores => ({type: scoreboardConstants.GETALL_SUCCESS, payload: scores})
  const failure = error => ({type: scoreboardConstants.GETALL_FAILURE, payload: error})

  return dispatch => {
    dispatch(request())

    scoreboardService.getAll()
      .then(
        scores => dispatch(success(scores)),
        error => dispatch(failure(error))
      )
  }
}

export const submitGameResult = (gamesParams) => {
  return dispatch => {
    dispatch(alertActions.success('Game is saving...'))

    scoreboardService.submitGameResult(gamesParams)
      .then(
        scores => {
          dispatch(getAll())
          dispatch(alertActions.success('Game saved'))
        },
        error => {
          dispatch(alertActions.error(error))
        }
      )
  }
}
