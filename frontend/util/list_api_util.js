import { _setHeaders } from './session_api_util'
import Auth from 'j-toker'

export const fetchLists = (success, error) => {
  _setHeaders()
  return $.ajax({
    method: 'GET',
    url: 'api/lists',
    success,
    error
  })
}

export const createList = (data, success, error) => {
  _setHeaders()
  return $.ajax({
    method: 'POST',
    url: 'api/lists',
    data,
    success,
    error
  })
}

export const updateList = (data, success, error) => {
  _setHeaders()
  const url = 'api/lists/' + data.list.id
  return $.ajax({
    method: 'PUT',
    url,
    data,
    success: _setHeaders,
    error
  })
}

export const deleteList = (data, success, error) => {
  _setHeaders()
  const url = 'api/lists/' + data.list.id
  return $.ajax({
    method: 'DELETE',
    url,
    data,
    success,
    error
  })
}
