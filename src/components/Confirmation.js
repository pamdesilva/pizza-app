import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Menu, Image } from 'semantic-ui-react';

const Confirmation = (props) => {
  return (
    <div>
    <Menu secondary id='navbar'>
      <Menu.Item as={Link} to='/menu' header id='navbar-header'>Slices</Menu.Item>
    </Menu>
      <Container>
        <Header as='h1' id='page-header'>Happy Days!</Header>
        <p id='confirmation-text'>Your order has been placed and will be delivered to you within the next hour.</p>
        <Image circular centered src='https://media.giphy.com/media/kJ04xPBmQp9Ti/giphy.gif' />
      </Container>
    </div>
  );
}

export default Confirmation;
