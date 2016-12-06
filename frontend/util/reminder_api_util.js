export const fetchReminders = (success, error) => {
  return $.ajax({
    method: 'GET',
    url: 'api/reminders',
    success,
    error
  })
}

export const createReminder = (reminder, success, error) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reminders',
    data: {reminder},
    success,
    error
  })
}
