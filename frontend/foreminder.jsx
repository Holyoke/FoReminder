import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store.js'

// components
import Root from './components/root'

//  testing
import * as api from './util/reminder_api_util'
import * as selectors from './reducers/selector.js'
import * as reminderActions from './actions/reminder_actions'
import * as commentActions from './actions/comment_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {}
  const store = configureStore(preloadedState)

  //  testing
  window.reminderActions = reminderActions
  window.commentActions =commentActions
  window.store = store
  window.selectors = selectors
  window.api = api
  window.store.getState()

  ReactDOM.render(<Root store={store} />, root)
})
