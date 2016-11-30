import { RECEIVE_REMINDER, RECEIVE_REMINDERS } from '../actions/reminder_actions'
import moment from 'moment'
import merge from 'lodash/merge'

const initialState = {
  "1": {
    id: 1,
    title: "wash room",
    body: "it is dirty",
    done: false,
    remind_date: moment().add(24, 'hours').format('LLL')
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "dog is dirty",
    done: true,
    remind_date: moment().add(24, 'hours').format('LLL')
  }
}

const remindersReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case RECEIVE_REMINDERS:
      action.reminders.forEach(reminder => newState[reminder.id] = reminder)
      return newState
    case RECEIVE_REMINDER:
      const newReminder = { [action.reminder.id]: action.reminder }
      newState = merge({}, state, newReminder)
      return newState
    default:
      return state
  }
}

export default remindersReducer
