import React from 'react';
import { Link  } from 'react-router-dom';
import { Header, Container, Button, Segment } from 'semantic-ui-react';
import NavBar from './NavBar';
import PizzaContainer from './PizzaContainer';

const Menu = (props) => (
  <div>
    <NavBar order={props.order} orderTotal={props.orderTotal}>
      {props.orderTotal > 0 && <Button as={Link} to='/cart' color='violet' id='menu-checkout-btn'>Checkout</Button>}
    </NavBar>
    <Segment inverted color='pink' textAlign='center'>
      <Header as='h3'>Free Delivery for orders over £12 🎉🎉🎉</Header>
    </Segment>
    <Header as='h1' id='page-header'>Pick Your Pizzas</Header>
    <Container>
      <PizzaContainer addToOrder={props.addToOrder} />
    </Container>
  </div>
);

export default Menu;
