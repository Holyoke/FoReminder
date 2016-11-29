import { RECEIVE_REMINDER, RECEIVE_REMINDERS } from '../actions/reminder_actions'

const RemindersReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case RECEIVE_REMINDERS:
      action.reminders.forEach(reminder => newState[reminder.id] = reminder)
      return newState
    case RECEIVE_REMINDER:
      return newState[reminder.id] = reminder
    default:
      return state
  }
}

export default RemindersReducer
