import { scoreboardConstants } from '../constants'
import { scoreboardService } from '../services'

export const getAll = () => {
  const request = () => ({type: scoreboardConstants.GETALL_REQUEST})
  const success = scores => ({type: scoreboardConstants.GETALL_SUCCESS, scores})
  const failure = error => ({type: scoreboardConstants.GETALL_FAILURE, error})

  return dispatch => {
    dispatch(request())

    scoreboardService.getAll()
      .then(
        scores => dispatch(success(scores)),
        error => dispatch(failure(error))
      )
  }
}
