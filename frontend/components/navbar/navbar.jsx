import React from 'react'

import Link from 'react-router/lib/Link'

class NavBar extends React.Component {
  render () {
    const { currentUser, logout } = this.props
    return (
      <ul>Welcome {currentUser.email}.
        <li><Link to="/" onClick={logout}>Logout</Link></li>
        <li><Link to="/reminders">Reminders</Link></li>
      </ul>
    )
  }
}

export default NavBar
