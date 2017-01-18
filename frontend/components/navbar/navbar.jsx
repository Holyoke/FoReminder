import React from 'react'

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

class NavBar extends React.Component {
  render () {
    const { currentUser, logout } = this.props

    let brandText = "Greetings - please sign or login!"

    let navRightItems = []
    if (currentUser) {
      brandText = currentUser.email
      navRightItems.push(
        <LinkContainer to="/lists" key="ncd">
          <NavItem>Lists</NavItem>
        </LinkContainer>
      )
      navRightItems.push(
        <LinkContainer to="/reminders" key="ncu">
          <NavItem>Reminders</NavItem>
        </LinkContainer>
      )
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
        <Navbar.Header>
          <Navbar.Brand>{brandText}</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {navRightItems}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
