import * as util from '../util/session_api_util'
import { receiveErrors, clearErrors } from './error_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT = 'LOGOUT'

// async
export const login = (user) => {
  return (dispatch) => {
    return util.login(user).then(user => dispatch(receiveCurrentUser(user)))
  }
}

export const logout = () => {
  return (dispatch) => {
    return util.logout().then(() => dispatch(logoutCurrentUser()))
  }
}

export const signup = (user) => {
  return (dispatch) => {
    return util.signup(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => {
        dispatch(receiveErrors(err.responseJSON.errors.full_messages))
      }
    )
  }
}

// sync
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT
})
