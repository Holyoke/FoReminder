import React from 'react'
import NavBarContainer from './navbar/navbar_container'
import GreetingContainer from './greeting/greeting_container'

const App = ({children}) => (
  <div className="app" style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
    <NavBarContainer />
    <GreetingContainer />
    {children}
  </div>
)

export default App
