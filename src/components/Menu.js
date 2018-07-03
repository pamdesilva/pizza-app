import React from 'react';
import { Link  } from 'react-router-dom';
import { Header, Container, Segment, Button } from 'semantic-ui-react';
import { formatPrice } from '../helpers';
import PizzaContainer from './PizzaContainer';

const Menu = (props) => (
  <Container>
    <Header as="h1" id="page-header">Pizzas</Header>
    <PizzaContainer addToOrder={props.addToOrder} />
    <Segment id="menu-total" textAlign="right">
      <strong>Total: {formatPrice(props.orderTotal)}</strong>
      <Button as={Link} to="/cart" id="menu-checkout-btn" color='violet' size='large'>Checkout</Button>
    </Segment>
  </Container>
);

export default Menu;
