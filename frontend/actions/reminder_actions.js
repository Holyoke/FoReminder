export const REQUEST_REMINDERS = 'REQUEST_REMINDERS'
export const RECEIVE_REMINDERS = 'RECEIVE_REMINDERS'

export const requestReminders = () => ({
  type: REQUEST_REMINDERS
})

export const receiveReminders = reminders => ({
  type: RECEIVE_REMINDERS,
  reminders
})
