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
}

export const signup = (user) => {
  user['password_confirmation'] = user.password
  return Auth.emailSignUp(user)
}
