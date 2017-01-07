import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

class NavBar extends React.Component {
  render () {
    const { currentUser, logout } = this.props
    return (
      <Navbar fluid>
        <Navbar.Text>Welcome {currentUser.email}</Navbar.Text>
        <Nav>
          <LinkContainer to="/reminders">
            <NavItem>Reminders</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/">
            <NavItem onClick={logout}>Logout</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
