import { RECEIVE_REMINDER, RECEIVE_REMINDERS, REMOVE_REMINDER } from '../actions/reminder_actions'
import { RECEIVE_CURRENT_LIST } from '../actions/current_list_actions'
import { LOGOUT } from '../actions/session_actions'
import merge from 'lodash/merge'

const initialState = {
  '1': {
    id: 1,
    title: 'initial Title',
    body: 'initial Body',
    done: false,
    remind_date: ''
  }
}

const remindersReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case RECEIVE_REMINDERS:
      action.reminders.forEach(reminder => { newState[reminder.id] = reminder })
      return newState
    case RECEIVE_REMINDER:
      const newReminder = { [action.reminder.id]: action.reminder }
      newState = merge({}, state, newReminder)
      return newState
    case REMOVE_REMINDER:
      newState = merge({}, state)
      delete newState[action.reminder.id]
      return newState
    case LOGOUT:
      return newState
    default:
      return state
  }
}

export default remindersReducer
