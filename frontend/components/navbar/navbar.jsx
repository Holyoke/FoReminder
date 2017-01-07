import React from 'react'

import Link from 'react-router/lib/Link'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { currentUser } = this.props
    return (
      <ul>Welcome {currentUser.email}.
        <li><Link to="/" onClick={() => {}}>Logout</Link></li>
        <li><Link to="/reminders">Reminders</Link></li>
      </ul>
    )
  }
}

export default NavBar
