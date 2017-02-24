import React from 'react'
import Link from 'react-router/lib/Link'
import Button from 'react-bootstrap/lib/Button'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

class Greeting extends React.Component {
  render () {
    let content = ''
    let linkRowStyle = {display: 'flex', justifyContent: 'space-around'}
    let buttonRowStyle = {display: 'flex', justifyContent: 'space-around'}
    const { guestLogin } = this.props

    if (this.props.currentUser) {
      content = <div />
    } else {
      content = <Jumbotron>
        <h1>Welcome to Remindux!</h1>
        <p>This is a reminder app built with Rails 5, React, and Redux.</p>
        <div style={linkRowStyle} className="icon-links">
          <a href="https://github.com/holyoke/remindux">Github Repo</a>
          <a href="https://linkedin.com/in/jasonebueng">Developer's LinkedIn</a>
          <a href="http://remindux.herokuapp.com/api/docs">API Documentation</a>
        </div>
        <br />
        <div style={buttonRowStyle} className="greeting-buttons-container">
          <Button bsStyle="primary" onClick={guestLogin} >Demo as Guest!</Button>
          <Link to="login"><Button bsStyle="success">Login</Button></Link>
          <Link to="signup"><Button bsStyle="success">Signup</Button></Link>
        </div>
      </Jumbotron>
    }

    return content
  }
}

export default Greeting
