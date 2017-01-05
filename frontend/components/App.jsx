import React from 'react'
import GreetingContainer from './greeting/greeting_container'

const App = ({children}) => (
  <div className="app" style={{width: "75%", marginLeft: "auto", marginRight: "auto"}}>
    <h1>foReminder App</h1>
    <GreetingContainer />
    {children}
  </div>
)

export default App
