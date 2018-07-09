import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

const NavBar = (props) => (
  <Menu secondary id='navbar'>
    <Menu.Item as={Link} to='/menu' header id='navbar-header'>Slices</Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item as={Link} to='/menu' id='navbar-menu'>
        <span role='img' aria-label='pizza'>🍕 </span>
        <strong>Menu</strong>
      </Menu.Item>
      <Menu.Item as={Link} to='/cart' id='navbar-total'>
        <Icon name='cart' color='violet' />
        <strong>{formatPrice(props.orderTotal)}</strong>
        [checkout]
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default NavBar;
