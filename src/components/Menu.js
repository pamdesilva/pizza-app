import React from 'react';
import { Link  } from 'react-router-dom';
import { Grid, Header, Container, Button } from 'semantic-ui-react';
import { formatPrice } from '../helpers';
import NavBar from './NavBar';
import PizzaContainer from './PizzaContainer';

const Menu = (props) => (
  <div>
    <NavBar order={props.order} orderTotal={props.orderTotal}/>
    <Container>
      <Header as='h1' id='page-header'>Pick Your Pizzas</Header>
      <PizzaContainer addToOrder={props.addToOrder} />
    </Container>
    <Container id='menu-total' textAlign='right' fluid>
        <strong id='menu-total'>Total: {formatPrice(props.orderTotal)}</strong>
        <Button as={Link} to='/cart' id='menu-checkout-btn' color='violet' size='large'>Go to Cart</Button>
    </Container>
  </div>
);

export default Menu;
