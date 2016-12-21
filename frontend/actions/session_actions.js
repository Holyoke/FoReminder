import * as util from '../util/session_api_util'
import { parseErrorResponse } from '../util/error_util'

import { receiveErrors, clearErrors } from './error_actions'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT = 'LOGOUT'

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
        console.log("session actions login error:", err)
        // login unregistered user
        const { errors } = err.data
        dispatch(receiveErrors(errors))
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
        console.log("session actions signup error:", err)
        const { full_messages } = err.data.errors
        dispatch(receiveErrors(full_messages))
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
