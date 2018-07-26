import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

class NavBar extends Component{

  static propTypes = {
    orderTotal: PropTypes.number
  }

  render(){
    return(
      <Menu fixed='top' borderless id='navbar'>
        <Container>
          <Menu.Item as={Link} to='/menu' id='navbar-header'>Slices</Menu.Item>
          <Menu.Item id='navbar-total' position='right'>
            <Icon name='cart'/>
            {formatPrice(this.props.orderTotal)}
            {this.props.children}
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default NavBar;
