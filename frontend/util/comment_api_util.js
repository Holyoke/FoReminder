import { _setHeaders } from './session_api_util'
import Auth from 'j-toker'

export const fetchComments = (reminder_id, success, error) => {
  _setHeaders()
  return $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: {reminder_id},
    success,
    error
  })
}

export const createComment = (data, success, error) => {
  _setHeaders()
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data,
    success,
    error
  })
}

export const updateComment = (data, success, error) => {
  _setHeaders()
  const url = 'api/comments/' + data.comment.id
  return $.ajax({
    method: 'PUT',
    url,
    data,
    success: _setHeaders,
    error
  })
}

export const deleteComment = (data, success, error) => {
  _setHeaders()
  const url = 'api/comments/' + data.comment.id
  return $.ajax({
    method: 'DELETE',
    url,
    data,
    success,
    error
  })
}
