export const signup = (data, success, error) => {
  return $.ajax({
    method: 'POST',
    url: 'auth',
    data,
    success,
    error
  })
}

export const login = (data, success, error) => {
  return $.ajax({
    method: 'POST',
    url: 'auth/sign_in',
    data,
    success,
    error
  }).then((data, status, response) => {
      $.ajaxSetup({
        headers: {
          'access-token': response.getResponseHeader('access-token'),
          'uid': response.getResponseHeader('uid'),
          'client': response.getResponseHeader('client')
        }
      })
  })
}

export const logout = (success, error) => {
  return $.ajax({
    method: 'DELETE',
    url: 'auth/sign_out',
    success,
    error
  })
}
