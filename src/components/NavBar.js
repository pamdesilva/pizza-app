import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

const NavBar = (props) => (
  <Menu secondary id='navbar'>
    <Menu.Item as={Link} to='/menu' header id='navbar-header'>Slices</Menu.Item>
    <div className='item right'>
      <Menu.Item as={Link} to='/menu' name='Menu' id='navbar-menu'/>
      <Menu.Item as={Link} to='/cart' id='navbar-total'>
        <span role='img' aria-label='pizza'>🍕 </span>
        {formatPrice(props.orderTotal)}
      </Menu.Item>
    </div>
  </Menu>
);

export default NavBar;
