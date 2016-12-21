import * as util from '../util/session_api_util'
import { parseErrorResponse } from '../util/error_util'

import { clearErrors } from './error_actions'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT = 'LOGOUT'
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS'

// async
export const login = (user) => {
  return (dispatch) => {
    return util.login(user)
    .then(
      (user, resp, response) => {
        dispatch(receiveCurrentUser(user))
        dispatch(clearErrors())
      },
      err => {
        dispatch(receiveLoginErrors(err))
      }
    )
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
      user => {
        dispatch(receiveCurrentUser(user))
        dispatch(clearErrors())
      },
      err => {
        dispatch(receiveErrors(err))
      }
    )
  }
}

// sync
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveLoginErrors = errors => ({
  type: RECEIVE_LOGIN_ERRORS,
  errors
})

export const logoutCurrentUser = () => ({
  type: LOGOUT
})
