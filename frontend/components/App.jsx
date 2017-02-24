import React from 'react'
import NavBarContainer from './navbar/navbar_container'
import GreetingContainer from './greeting/greeting_container'

const App = ({children, router}) => (
  <div className="app" style={{width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
    <NavBarContainer router={router} />
    {children}
  </div>
)

export default App
