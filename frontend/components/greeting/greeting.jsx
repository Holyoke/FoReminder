import React from 'react'
import Link from 'react-router/lib/Link'

// components
import Button from 'react-bootstrap/lib/Button'

class Greeting extends React.Component {
  render () {
    const { currentUser } = this.props
    let greeting

    if (!!currentUser) {
      greeting =
        <div>Welcome {currentUser.email}.
          <Button onClick={this.props.logout}>Logout</Button>
        </div>
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
