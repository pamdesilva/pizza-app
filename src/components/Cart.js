import React, { Component, Fragment } from 'react';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Container, Header } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

import NavBar from './NavBar';
import Order from './Order';
import Footer from './Footer';

class Cart extends Component {

  static propTypes = {
    orderTotal: PropTypes.number,
    addToOrder: PropTypes.func.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
    order: PropTypes.array,
    updateCheckoutTotal: PropTypes.func.isRequired,
  }

  render(){
    const totalPizzaPrice = this.props.orderTotal;
    const deliveryPrice = this.props.orderTotal < 1200 ? 500 : 0;
    const checkoutTotal = totalPizzaPrice + deliveryPrice;

    if (this.props.orderTotal === 0) {
      return (
        <Fragment>
          <NavBar orderTotal={this.props.orderTotal}/>
          <Container id='page-container'>
            <Header as='h1' id='page-header'>Your Order</Header>
            <Container id='cart-empty-box'>
              <p id='cart-empty-text'>Your cart is empty. Add some pizzas <span role='img' aria-label='pizza'>🍕🍕🍕</span></p>
              <Button as={Link} to='/menu' color='teal' size='large'>Go to Menu</Button>
            </Container>
          </Container>
          <Footer />
        </Fragment>
      )
    }

    return(
      <Fragment>
        <NavBar orderTotal={this.props.orderTotal}/>
        <Container id='page-container'>
          <Container id='cart-header'>
            <Header as='h1' id='page-header'>Your Cart</Header>
            <Button as={Link} to='/menu' color='teal' size='large' id='cart-menu-btn'>Back to Menu</Button>
          </Container>
          <Container id='order-box'>
            <Order
              order={this.props.order}
              addToOrder={this.props.addToOrder}
              removeFromOrder={this.props.removeFromOrder}
            />
            <Container id='cart-total'>
              <p>Order: <strong>{formatPrice(totalPizzaPrice)}</strong></p>
              <p>Delivery (free over £12): <strong>{formatPrice(deliveryPrice)}</strong></p>
              <p>Total: <strong>{formatPrice(checkoutTotal)}</strong></p>
              <Button as={Link} to='/checkout' id='cart-checkout-btn' color='teal' onClick={() => this.props.updateCheckoutTotal(checkoutTotal)}>Go to Payment</Button>
            </Container>
            </Container>
          </Container>
          <Footer />
      </Fragment>
    );
  }
}

export default Cart;
