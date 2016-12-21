import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'
import Auth from 'j-toker'

// components
import Root from './components/root'

//  testing
import * as api from './util/reminder_api_util'
import * as sessionApi from './util/session_api_util'
import * as selectors from './reducers/selector.js'
import * as reminderActions from './actions/reminder_actions'
import * as commentActions from './actions/comment_actions'
import * as errorActions from './actions/error_actions'
import * as sessionActions from './actions/session_actions'

import moment from 'moment'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {}


  //config Auth
  Auth.configure({
    apiUrl: 'http://localhost:3000',
    handleLoginResponse: (resp) => {
      sessionApi._setHeaders()
      console.log("Headers set in loginhandle response.", resp)
      return resp.data
    }
  })

  if (!$.isEmptyObject(Auth.user)) {
    const session = { currentUser: Auth.user }
    preloadedState.session = session
  }

  const store = configureStore({})


  //  testing
  window.Auth = Auth
  window.reminderActions = reminderActions
  window.commentActions = commentActions
  window.errorActions = errorActions
  window.sessionActions = sessionActions
  window.store = store
  window.selectors = selectors
  window.api = api
  window.sessionApi = sessionApi
  window.moment = moment

  ReactDOM.render(<Root store={store} auth={Auth}/>, root)
})
