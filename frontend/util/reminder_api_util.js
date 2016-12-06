export const fetchReminders = (success, error) => {
  return $.ajax({
    method: 'GET',
    url: 'api/reminders',
    success,
    error
  })
}

export const createReminder = (data, success, error) => {
  console.table(data)
  return $.ajax({
    method: 'POST',
    url: 'api/reminders',
    data: data,
    success,
    error: console.error("Error: ", arguments)
  })
}
