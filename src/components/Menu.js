import React from 'react';
import { Link  } from 'react-router-dom';
import { Header, Container, Button } from 'semantic-ui-react';
import NavBar from './NavBar';
import PizzaContainer from './PizzaContainer';

const Menu = (props) => (
  <div>
    <NavBar order={props.order} orderTotal={props.orderTotal}>
      {props.orderTotal > 0 && <Button as={Link} to='/cart' color='violet' id='menu-checkout-btn'>Checkout</Button>}
    </NavBar>
    <Header as='h1' id='page-header'>Pick Your Pizzas</Header>
    <Container textAlign='center' id='menu-free-banner'>
      <p id='menu-banner-text'>Free delivery when you order over £12</p>
    </Container>
    <Container>
      <PizzaContainer addToOrder={props.addToOrder} />
    </Container>
  </div>
);

export default Menu;
