import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// components
import App from './App'

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="signup" component={App} />
        <Route path="login" component={App} />
      </Route>
    </Router>
  </Provider>
)

export default Root
