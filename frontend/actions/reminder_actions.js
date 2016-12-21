import * as util from '../util/reminder_api_util'
import { _setHeaders } from '../util/session_api_util'

import { receiveErrors, clearErrors } from './error_actions'
export const RECEIVE_REMINDERS = 'RECEIVE_REMINDERS'
export const RECEIVE_REMINDER = 'RECEIVE_REMINDER'
export const REMOVE_REMINDER = 'REMOVE_REMINDER'

// api interactions
export const fetchReminders = () => {
  return (dispatch) => {
    return util.fetchReminders().then(reminders => dispatch(receiveReminders(reminders)))
  }
}

export const createReminder = (reminder) => {
  return (dispatch) => {
    return util.createReminder(reminder)
               .then(reminder => {
                 dispatch(receiveReminder(reminder))
                 dispatch(clearErrors())
               },
                 err => {
                   dispatch(receiveErrors(err))
                 }
               )
  }
}

export const updateReminder = (reminder) => {
  return (dispatch) => {
    return util.updateReminder(reminder)
               .then(reminder => {
                 dispatch(receiveReminder(reminder))
                 dispatch(clearErrors())
               },
                 err => {
                   dispatch(receiveErrors(err))
                 }
               )
  }
}

export const deleteReminder = (reminder) => {
  return (dispatch) => {
    return util.deleteReminder(reminder)
               .then(reminder => {
                 dispatch(removeReminder(reminder))
                 dispatch(clearErrors())
               },
                 err => dispatch(receiveErrors(err)))
  }
}

// sync actions
export const receiveReminder = reminder => ({
  type: RECEIVE_REMINDER,
  reminder
})

export const receiveReminders = reminders => ({
  type: RECEIVE_REMINDERS,
  reminders
})

export const removeReminder = reminder => ({
  type: REMOVE_REMINDER,
  reminder
})
