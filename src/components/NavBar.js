import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

const NavBar = (props) => (
  <Menu secondary id="nav-bar">
    <Menu.Item as={Link} to="/" header id="nav-header">Pie in the Sky 🍕</Menu.Item>
    <div className="item right">
      <Menu.Item as={Link} to="/menu" name="Menu"/>
      <Menu.Item as={Link} to="/cart">{formatPrice(props.orderTotal)}</Menu.Item>
    </div>
  </Menu>
);

export default NavBar;
