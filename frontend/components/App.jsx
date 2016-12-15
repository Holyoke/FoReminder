import React from 'react'
import ReminderListContainer from './reminder_list/reminder_list_container'
import GreetingContainer from './greeting/greeting_container'

const App = ({children}) => (
  <div className="app">
    <h1>foReminder App</h1>
    <GreetingContainer />
    {children}
  </div>
)

export default App
