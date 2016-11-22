export const fetchReminders = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/reminders',
    success,
    error
  })
}
