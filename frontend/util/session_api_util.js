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
    success: (data, status, response) => {
        const headers = {
          'access-token': response.getResponseHeader('access-token'),
          'uid': response.getResponseHeader('uid'),
          'client': response.getResponseHeader('client')
        }

        localStorage.setItem('access-token', headers["access-token"])
        localStorage.setItem('uid', headers["uid"])
        localStorage.setItem('client', headers["client"])

        $.ajaxSetup({
          headers
        })
    },
    error
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
