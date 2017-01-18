import React from 'react'

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

class NavBar extends React.Component {
  render () {
    const { currentUser, logout } = this.props
    const brandHeader = 'Remindux'
    let navRightItems = []
    let navLeftItems = []
    let emailText = currentUser ? currentUser.email : ''

    if (currentUser) {
      navLeftItems.push(
        <LinkContainer to="/lists" key="ncd">
          <NavItem>Lists</NavItem>
        </LinkContainer>
      )
      navLeftItems.push(
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
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>{brandHeader}</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            {navLeftItems}
          </Nav>
          <Nav pullRight>
            {navRightItems}
          </Nav>
          <Navbar.Text pullRight>{emailText}</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
