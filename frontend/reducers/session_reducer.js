import { RECEIVE_CURRENT_USER, RECEIVE_LOGIN_ERRORS, LOGOUT } from '../actions/session_actions'
import merge from 'lodash/merge'

const _nullUser = {
  currentUser: null,
  errors: []
}

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser.data
      return merge({}, _nullUser, {currentUser})
    case RECEIVE_LOGIN_ERRORS:
      const errors = action.errors
      return merge({}, _nullUser, {errors})
    case LOGOUT:
      return merge({}, _nullUser)
    default:
      return state
  }
}

export default SessionReducer
