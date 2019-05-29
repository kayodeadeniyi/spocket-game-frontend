import { userConstants } from '../constants'

export const users = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {loading: true}

    case userConstants.GETALL_SUCCESS:
      return {allUsers: action.payload.users, loading: false}

    case userConstants.GETALL_FAILURE:
      return {error: action.payload, loading: false}

    default:
      return state
  }
}
