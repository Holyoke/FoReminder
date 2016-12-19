import React from 'react'
import Link from 'react-router/lib/Link'

// components
import Button from 'react-bootstrap/lib/Button'

class Greeting extends React.Component {
  constructor (props) {
    super (props)
    this.handleLogOutButton = this.handleLogOutButton.bind(this)
  }

  handleLogOutButton () {
    this.props.router.push('/')
    this.props.logout()
  }

  render () {
    const { currentUser, logout } = this.props
    let greeting

    if (!!currentUser) {
      greeting =
        <ul>Welcome {currentUser.email}.
          <li><Link to="/" onClick={logout}>Logout</Link></li>
          <li><Link to="/reminders">Reminders</Link></li>
        </ul>
    } else {
      greeting =
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ul>
    }

    return (
        <div>{greeting}</div>
    )
  }
}

export default Greeting
