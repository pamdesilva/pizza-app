import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Grid, Image, Button, Segment, Container, Icon, Header } from 'semantic-ui-react';
import { PizzaList } from '../data/pizzas';
import { formatPrice } from '../helpers';
import Order from './Order';

class Cart extends Component {

  render(){

    const totalPizzaPrice = this.props.orderTotal;
    const deliveryPrice = this.props.orderTotal < 1200 ? 500 : 0;
    const checkoutTotal = totalPizzaPrice + deliveryPrice;

    if (this.props.orderTotal === 0) {
      return (
        <div>
          <Header as='h1' id="page-header">Your Order</Header>
          <div className="order-box">
            <h4>Your cart is empty. Add some pizzas.</h4>
          </div>
        </div>
      )
    }

    return(
        <Container>
          <Header as='h1' id="page-header">Your Order</Header>
          <Container id="order-box">
            <Order
              order={this.props.order}
              removeFromOrder={this.props.removeFromOrder}
            />
            <Segment inverted color='violet' id="order-total">
              <p><strong>Order:</strong>  {formatPrice(totalPizzaPrice)}</p>
              <p><strong>Delivery:</strong>  {formatPrice(deliveryPrice)}</p>
              <p><strong>Total:</strong>  {formatPrice(checkoutTotal)}</p>
              <Button as={Link} to="/customer-details" size='large' onClick={() => this.props.updateCheckoutTotal(checkoutTotal)}>Confirm Order</Button>
            </Segment>
          </Container>
        </Container>
    );
  }
}

export default Cart;
