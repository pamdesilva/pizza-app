import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

const NavBar = (props) => (
  <Menu secondary id='navbar'>
    <Menu.Item as={Link} to='/menu' header id='navbar-header'>Slices</Menu.Item>
    <div className='item right'>
      <Menu.Item as={Link} to='/menu' id='navbar-menu'><strong>Menu</strong></Menu.Item>
      <Menu.Item as={Link} to='/cart' id='navbar-total'>
        <span role='img' aria-label='pizza'>🍕 </span>
        <strong>{formatPrice(props.orderTotal)}</strong>
      </Menu.Item>
    </div>
  </Menu>
);

export default NavBar;
