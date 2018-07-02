import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Grid, Row, Col, Button, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { PizzaList } from '../data/pizzas';
import { formatPrice } from '../helpers';

class Order extends Component {

  renderOrder = (key) => {
    const pizza = PizzaList[key];
    const count = this.props.order[key];

    return(
      <Row className="order-item">
        <Col xs={2}>
          <Image className="pizza-img-order" src={pizza.image} alt="pizza" />
        </Col>
        <Col xs={6} md={4} className="order-item-text">
          <span><strong>{count}</strong></span>
          <span><strong> x {pizza.name}</strong></span>
          <span className="order-item-price">{formatPrice(count * pizza.price)}</span>
          <button onClick={() => this.props.removeFromOrder(key)}>ⓧ</button>
        </Col>
      </Row>
    )
  }

  render(){
    const orderIds = Object.keys(this.props.order);
    const totalPizzaPrice = this.props.orderTotal;
    const deliveryPrice = this.props.orderTotal < 1200 ? 500 : 0;

    if (this.props.orderTotal === 0) {
      return (
        <div>
          <h2>Your Order</h2>
          <div className="order-box">
            <h4>Your cart is empty. Add some pizzas.</h4>
          </div>
        </div>
      )
    }

    return(
        <Grid className="order-box">
          <h2 className="order-header">Your Order</h2>
          <Col>
          <Row>
            {orderIds.map(this.renderOrder)}
          </Row>
          </Col>
          <Col>
          <Row>
            <p>Delivery: {formatPrice(deliveryPrice)}</p>
            <p>Items: {formatPrice(totalPizzaPrice)}</p>
            <p>Total: {formatPrice(totalPizzaPrice + deliveryPrice)}</p>
            <p>
              <Link to="/checkout"><Button>Checkout now</Button></Link>
            </p>
          </Row>
          </Col>
        </Grid>
    );
  }
}

export default Order;
