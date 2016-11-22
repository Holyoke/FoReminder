import React from 'react'
import ReactDOM from 'react-dom'

import * as actions from './util/reminder_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  //testing
  window.actions = actions
  
  ReactDOM.render(<h1>TestYay!</h1>,root)
})
