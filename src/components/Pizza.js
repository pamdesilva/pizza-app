import React, { Component } from 'react';
import { Col, Button, Image } from 'react-bootstrap';
import { formatPrice, formatToppings } from '../helpers';

class Pizza extends Component {
  render(){
    const {name, toppings, image, price } = this.props.details;
    return(
      <Col xs={6} md={4} className="pizza-card">
        <Image responsive className="pizza-img" src={image} alt="pizza" />
        <h3>{name}</h3>
        <p>{formatToppings(toppings)}</p>
        <h4>{formatPrice(price)}</h4>
        <p>
          <Button onClick={() => this.props.addToOrder(this.props.id)} bsStyle="primary" className="pizza-order-btn">Add to order</Button>
        </p>
      </Col>
    )
  }
}

export default Pizza;
