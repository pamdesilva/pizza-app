import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { formatPrice } from '../helpers';

const Header = (props) => (
  <Navbar className="header">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Pizza & Co</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Nav pullRight>
    <NavItem eventKey={1} href="/menu">
      Menu
    </NavItem>
    <NavItem eventKey={2} href="/cart">
      🍕{formatPrice(props.orderTotal)}
    </NavItem>
  </Nav>
  </Navbar>
);

export default Header;
