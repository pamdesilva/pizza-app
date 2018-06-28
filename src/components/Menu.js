import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PizzaContainer from './PizzaContainer';
import Order from './Order';

const Menu = (props) => (
  <Grid>
    <Row className="show-grid">
      <h1>Pizzas</h1>
      <Col xs={12} md={8}>
        <PizzaContainer addToOrder={props.addToOrder} />
      </Col>
      <Col xs={6} md={4}>
        <Order order={props.order} removeFromOrder={props.removeFromOrder} />
      </Col>
    </Row>
  </Grid>

);

export default Menu;
