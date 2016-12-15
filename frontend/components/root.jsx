import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// components
import App from './App'
import SessionFormContainer from './session_form_container'
import ReminderListContainer from './reminder_list/reminder_list_container'

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="signup" component={SessionFormContainer} />
        <Route path="login" component={SessionFormContainer} />
        <Route path="reminders" component={ReminderListContainer} />
      </Route>
    </Router>
  </Provider>
)

export default Root
