export const fetchReminders = (success, error) => {
  return $.ajax({
    method: 'GET',
    url: 'api/reminders',
    success,
    error
  })
}

export const createReminder = (data, success, error) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reminders',
    data,
    success,
    error
  })
}

export const updateReminder = (data, success, error) => {
  const url = 'api/reminders/' + data.reminder.id
  return $.ajax({
    method: 'PUT',
    url,
    data,
    success,
    error
  })
}

export const deleteReminder = (data, success, error) => {
  const url = 'api/reminders/' + data.reminder.id
  return $.ajax({
    method: 'DELETE',
    url,
    data,
    success,
    error
  })
}
