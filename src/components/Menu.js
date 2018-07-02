import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PizzaContainer from './PizzaContainer';

const Menu = (props) => (
  <Grid>
    <Row className="show-grid">
      <h1>Pizzas</h1>
        <PizzaContainer addToOrder={props.addToOrder} />
    </Row>
  </Grid>

);

export default Menu;
