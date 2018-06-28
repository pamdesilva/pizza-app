import React from 'react';
import { Col, Button, Image } from 'react-bootstrap';
import { formatPrice, formatToppings } from '../helpers';

const Pizza = (props) => (
 <Col xs={12} md={4} className="pizza-card">
     <Image responsive className="pizza-img" src={props.img} alt="pizza" />
     <h3>{props.name}</h3>
     <p>{formatToppings(props.toppings)}</p>
     <h4>{formatPrice(props.price)}</h4>
     <p>
       <Button bsStyle="primary" className="pizza-order-btn">Add to order</Button>&nbsp;
     </p>
 </Col>
);

export default Pizza;
