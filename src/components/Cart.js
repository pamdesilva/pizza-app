import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Grid, Image, Button, Segment, Container, Icon, Header } from 'semantic-ui-react';
import { PizzaList } from '../data/pizzas';
import { formatPrice } from '../helpers';

class Order extends Component {

  renderOrder = (key) => {
    const pizza = PizzaList[key];
    const count = this.props.order[key];

    return(
      <Segment raised>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={pizza.image} />
            </Grid.Column>
            <Grid.Column width={12}>
              <p><strong>{pizza.name}</strong><Icon name='delete' circular id="order-delete" onClick={() => this.props.removeFromOrder(key)} /></p>
              <p>Quantity: {count}</p>
              <p>Price per pizza: {formatPrice(count * pizza.price)}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  render(){
    const orderIds = Object.keys(this.props.order);
    const totalPizzaPrice = this.props.orderTotal;
    const deliveryPrice = this.props.orderTotal < 1200 ? 500 : 0;
    const checkoutTotal = totalPizzaPrice + deliveryPrice;

    if (this.props.orderTotal === 0) {
      return (
        <div>
          <Header as='h1' id="order-header">Your Order</Header>
          <div className="order-box">
            <h4>Your cart is empty. Add some pizzas.</h4>
          </div>
        </div>
      )
    }

    return(
        <Container>
          <Header as='h1' id="order-header">Your Order</Header>
          <Container id="order-box">
          {orderIds.map(this.renderOrder)}
          <Segment inverted color='violet' id="order-total">
            <p><strong>Order:</strong>  {formatPrice(totalPizzaPrice)}</p>
            <p><strong>Delivery:</strong>  {formatPrice(deliveryPrice)}</p>
            <p><strong>Total:</strong>  {formatPrice(checkoutTotal)}</p>
            <Button as={Link} to="/checkout" onClick={() => this.props.updateCheckoutTotal(checkoutTotal)}>Checkout now</Button>
          </Segment>
          </Container>
        </Container>
    );
  }
}

export default Order;
