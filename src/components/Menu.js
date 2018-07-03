import React from 'react';
import { Link  } from 'react-router-dom';
import { Header, Container, Segment, Button } from 'semantic-ui-react';
import { formatPrice } from '../helpers';
import PizzaContainer from './PizzaContainer';

const Menu = (props) => (
  <Container>
    <Header as="h1" id="menu-header">Pizzas</Header>
    <PizzaContainer addToOrder={props.addToOrder} />
    <Segment id="menu-total">
      Total: {formatPrice(props.orderTotal)}
      <Button primary as={Link} to="/cart" id="menu-checkout-btn">Checkout</Button>
    </Segment>
  </Container>
);

export default Menu;
