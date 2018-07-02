import React from 'react';
import { Container } from 'semantic-ui-react';
import PizzaContainer from './PizzaContainer';

const Menu = (props) => (
  <Container>
    <h1 id="menu-header">Pizzas</h1>
    <PizzaContainer addToOrder={props.addToOrder} />
  </Container>
);

export default Menu;
