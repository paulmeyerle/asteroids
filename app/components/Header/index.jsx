import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Asteroids</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/settings">
              <NavItem eventKey={1}>Settings</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
    );
  }
}

export default Header