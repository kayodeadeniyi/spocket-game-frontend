import { scoreboardConstants } from '../constants'

export const scoreboards = (state = {}, action) => {
  switch (action.type) {
    case scoreboardConstants.GETALL_REQUEST:
      return {loading: true}

    case scoreboardConstants.GETALL_SUCCESS:
      return {allScores: action.scores.games, loading: false}

    case scoreboardConstants.GETALL_FAILURE:
      return {error: action.error, loading: false}

    default:
      return state
  }
}
