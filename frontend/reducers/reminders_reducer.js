import { RECEIVE_REMINDER, RECEIVE_REMINDERS } from '../actions/reminder_actions'

const initialState = {
  "1": {
    id: 1,
    title: "wash room",
    body: "it is dirty",
    done: false,
    remind_date: new Date().toString()
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "dog is dirty",
    done: true,
    remind_date: new Date().toString()
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
      let reminder = action.reminder
      return newState[reminder.id] = reminder
    default:
      return state
  }
}

export default remindersReducer
