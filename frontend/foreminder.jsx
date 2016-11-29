import React from 'react'
import ReactDOM from 'react-dom'

// components
import App from './components/App'

//  testing
import * as api from './util/reminder_api_util'
import configureStore from './store/store.js'
import { allReminders } from './reducers/selector.js'
import * as actions from './actions/reminder_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore()

  //  testing
  window.actions = actions
  window.store = store
  window.allReminders = allReminders
  window.api = api

  ReactDOM.render(<App />, root)
})
