import React from 'react'
import Link from 'react-router/lib/Link'

class Greeting extends React.Component {
  render () {
    const { currentUser } = this.props
    let greeting

    if (!!currentUser) {
      greeting =
        <div>Welcome {currentUser.email}.
          <button>Logout</button>
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
