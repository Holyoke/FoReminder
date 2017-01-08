import React from 'react'

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

class NavBar extends React.Component {
  render () {
    const { currentUser, logout } = this.props

    let navRightItems = []
    if (currentUser) {
      navRightItems.push(
        <LinkContainer to="/" key="nls">
          <NavItem onClick={logout}>Logout</NavItem>
        </LinkContainer>)
    } else {
      navRightItems.push(
        <LinkContainer to="/login" key="nl1">
          <NavItem>Login</NavItem>
        </LinkContainer>)
      navRightItems.push(
        <LinkContainer to="/signup" key="nl2">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>)
    }
    return (
      <Navbar fluid>
        <Nav>
          <LinkContainer to="/reminders">
            <NavItem>Reminders</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          {navRightItems}
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
