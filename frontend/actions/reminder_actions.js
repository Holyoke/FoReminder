export const RECEIVE_REMINDERS = 'RECEIVE_REMINDERS'
export const RECEIVE_REMINDER = 'RECEIVE_REMINDER'
export const REMOVE_REMINDER = 'REMOVE_REMINDER'

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
