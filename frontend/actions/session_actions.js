import * as util from '../util/session_api_util'
import { parseErrorResponse } from '../util/error_util'

import { clearErrors } from './error_actions'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT = 'LOGOUT'
export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS'

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
        dispatch(receiveFormErrors(err))
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
        dispatch(receiveFormErrors(err))
      }
    )
  }
}

// sync
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveFormErrors = err => ({
  type: RECEIVE_FORM_ERRORS,
  err
})

export const logoutCurrentUser = () => ({
  type: LOGOUT
})
