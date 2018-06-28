import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar className="header">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Pizza & Co</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);

export default Header;
