import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

class Greeting extends React.Component {
  render () {
    return (
      <Jumbotron>
        <h1>Welcome to Remindux!</h1>
        <p>This is a reminder app built with Rails 5, React, and Redux.</p>
        <p><Button bsStyle="primary">Demo</Button></p>
      </Jumbotron>
    )
  }
}

export default Greeting
