import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Grid, Button, Container, Header } from 'semantic-ui-react';
import { formatPrice } from '../helpers';
import NavBar from './NavBar';
import Order from './Order';

class Cart extends Component {

  render(){

    const totalPizzaPrice = this.props.orderTotal;
    const deliveryPrice = this.props.orderTotal < 1200 ? 500 : 0;
    const checkoutTotal = totalPizzaPrice + deliveryPrice;

    if (this.props.orderTotal === 0) {
      return (
        <div>
          <Header as='h1' id='page-header'>Your Order</Header>
          <div className='order-box'>
            <h4>Your cart is empty. Add some pizzas.</h4>
          </div>
        </div>
      )
    }

    return(
      <div>
      <NavBar order={this.props.order} orderTotal={this.props.orderTotal}/>
      <Container>
        <Header as='h1' id='page-header'>Your Order</Header>
        <Container id='order-box'>
          <Order
            order={this.props.order}
            removeFromOrder={this.props.removeFromOrder}
          />
        </Container>
      </Container>
      <Grid id='cart-total'>
        <Grid.Column floated='right' id='cart-total-content'>
          <p>Order: <strong>{formatPrice(totalPizzaPrice)}</strong></p>
          <p>Delivery (free over £12): <strong>{formatPrice(deliveryPrice)}</strong></p>
          <p>Total: <strong>{formatPrice(checkoutTotal)}</strong></p>
          <Button as={Link} to='/checkout' size='large' color='violet' onClick={() => this.props.updateCheckoutTotal(checkoutTotal)}>Checkout & Pay</Button>
        </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Cart;
