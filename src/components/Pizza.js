import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';

const Pizza = (props) => (
 <Col xs={8} md={4} className="pizza-card clearfix">
  <Thumbnail src={props.img} alt="242x200">
    <h3>{props.name}</h3>
    <p>{props.toppings}</p>
    <p>
      <Button bsStyle="primary">Add to order</Button>&nbsp;
    </p>
  </Thumbnail>
 </Col>
);

export default Pizza;
