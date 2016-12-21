import Auth from 'j-toker'

export const login = (user) => {
  return Auth.emailSignIn(user)
}

export const logout = () => {
  return Auth.signOut()
}

export const validateToken = () => {
  return Auth.validateToken()
}

export const _setHeaders = () => {
  const authHeaders = Auth.retrieveData('authHeaders')
  if ($.isEmptyObject(authHeaders)) { return }
  const headers = {
    'access-token': authHeaders['access-token'],
    'uid': authHeaders['uid'],
    'client': authHeaders['client']
  }
  $.ajaxSetup({headers})
  console.log("Headers set: ", headers)
}

export const signup = (user) => {
  user['password_confirmation'] = user.password
  return Auth.emailSignUp(user)
}

export const oldSignup = (data, success, error) => {
  return $.ajax({
    method: 'POST',
    url: 'auth',
    data,
    success,
    error
  })
}

export const oldLogin = (data, success, error) => {
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

export const oldValidateToken = (success, error) => {
  return $.ajax({
    method: 'GET',
    url: 'auth/validate_token',
    success: (data, status, response) => {
      const headers = {
        'access-token': response.getResponseHeader('access-token'),
        'uid': response.getResponseHeader('uid'),
        'client': response.getResponseHeader('client')
      }

      localStorage.setItem('access-token', headers["access-token"])
      localStorage.setItem('uid', headers["uid"])
      localStorage.setItem('client', headers["client"])

      $.ajaxSetup({headers})
    },
    error
  })
}


export const oldLogout = (success, error) => {
  return $.ajax({
    method: 'DELETE',
    url: 'auth/sign_out',
    success,
    error
  })
}
