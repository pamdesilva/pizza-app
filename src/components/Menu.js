import React from 'react';
import { Col } from 'react-bootstrap';
import PizzaContainer from './PizzaContainer';

const Menu = () => (
  <Col className="menu-page">
    <h1>Pizzas</h1>
    <PizzaContainer />
  </Col>
);

export default Menu;
