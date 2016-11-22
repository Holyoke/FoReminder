import React from 'react'
import ReactDOM from 'react-dom'

//  testing
import * as actions from './util/reminder_api_util'
import configureStore from './store/store.js'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore()

  //  testing
  window.actions = actions
  window.store = store
  ReactDOM.render(<h1>TestYay!</h1>,root)
})
