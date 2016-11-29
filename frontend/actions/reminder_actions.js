export const REQUEST_REMINDERS = 'REQUEST_REMINDERS'
export const RECEIVE_REMINDERS = 'RECEIVE_REMINDERS'
export const RECEIVE_REMINDER = 'RECEIVE_REMINDER'

export const requestReminders = () => ({
  type: REQUEST_REMINDERS
})

export const receiveReminder = reminder => ({
  type: RECEIVE_REMINDER,
  reminder
})

export const receiveReminders = reminders => ({
  type: RECEIVE_REMINDERS,
  reminders
})
