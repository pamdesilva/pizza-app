import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { PizzaList } from '../data/pizzas';
import { formatPrice } from '../helpers';

class Order extends Component {

  renderOrder = key => {
    const pizza = PizzaList[key];
    const count = this.props.order[key];

    return(
      <li key={key} className="order-box-item">
        <span><strong>{count}</strong></span>
        <span><strong> x {pizza.name}</strong></span>
        <span className="order-item-price">{formatPrice(count * pizza.price)}</span>
        <button onClick={() => this.props.removeFromOrder(key)}>ⓧ</button>
      </li>
    )
  }

  render(){
    const orderIds = Object.keys(this.props.order);
    //
    // const total = orderIds.reduce((prevTotal, key) => {
    //   const pizza = PizzaList[key];
    //   const count = this.props.order[key];
    //   return prevTotal + (count * pizza.price);
    // }, 0);

    if (this.props.orderTotal === 0) {
      return (
        <div>
          <h2>Your Order</h2>
          <div className="order-box">
            <h4>Go ahead and pick some pizzas.</h4>
          </div>
        </div>
      )
    }

    return(
      <div>
        <h2>Your Order</h2>
        <div className="order-box">
        {orderIds.map(this.renderOrder)}
        Total: {formatPrice(this.props.orderTotal)}
        <Link to="/checkout"><Button>Checkout now</Button></Link>
        </div>
      </div>
    );
  }
}

export default Order;
