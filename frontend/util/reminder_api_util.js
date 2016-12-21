import { _setHeaders } from './session_api_util'
import Auth from 'j-toker'

export const fetchReminders = (success, error) => {
  _setHeaders()
  return $.ajax({
    method: 'GET',
    url: 'api/reminders',
    success,
    error
  })
}

export const createReminder = (data, success, error) => {
  _setHeaders()
  return $.ajax({
    method: 'POST',
    url: 'api/reminders',
    data,
    success,
    error
  })
}

export const updateReminder = (data, success, error) => {
  _setHeaders()
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
  _setHeaders()
  const url = 'api/reminders/' + data.reminder.id
  return $.ajax({
    method: 'DELETE',
    url,
    data,
    success,
    error
  })
}
