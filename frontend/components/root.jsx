import React from 'react'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

// components
import App from './App'
import SessionFormContainer from './session_form_container'
import ReminderListContainer from './reminder_list/reminder_list_container'
import ListsListContainer from './lists/lists_list_container'
import Greeting from './greeting/greeting'

const Root = ({store}) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const {currentUser} = store.getState().session
    if (!currentUser) { replace('/login') }
  }

  const _redirectIfLoggedIn = (nextState, replace) => {
    const {currentUser} = store.getState().session
    if (currentUser) { replace('/lists') }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="reminders" component={ReminderListContainer} onEnter={_ensureLoggedIn} />
          <Route path="lists" component={ListsListContainer} onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root
