import React from 'react'
import Link from 'react-router/lib/Link'

// components
import NavBarContainer from '../navbar/navbar_container'

class Greeting extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogOutButton = this.handleLogOutButton.bind(this)
  }

  handleLogOutButton () {
    this.props.router.push('/')
    this.props.logout()
  }

  render () {
    const { currentUser } = this.props
    let greeting

    if (currentUser) {
      greeting = ""
    } else {
      greeting =
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
    }

    return (<div>{greeting}</div>)
  }
}

export default Greeting
