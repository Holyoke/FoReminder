import React from 'react'
import NavBarContainer from './navbar/navbar_container'

const App = ({children}) => (
  <div className="app" style={{width: "75%", marginLeft: "auto", marginRight: "auto"}}>
    <h1>foReminder App</h1>
    <NavBarContainer />
    {children}
  </div>
)

export default App
