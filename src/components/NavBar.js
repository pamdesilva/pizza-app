import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

class NavBar extends Component{
  state = {
    cartEmpty: true
  }

  render(){
    return(
      <Menu secondary id='navbar'>
        <Menu.Item as={Link} to='/menu' header id='navbar-header'>Slices</Menu.Item>
        <Menu.Item id='navbar-total' position='right'>
          <Icon name='cart'/>
          <strong>{formatPrice(this.props.orderTotal)}</strong>
          {this.props.children}
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;
