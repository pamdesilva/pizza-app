import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import { Segment, Grid, Container, Header, Button } from 'semantic-ui-react';

import NavBar from './NavBar';
import PaymentForm from './PaymentForm';
import { formatPrice } from '../helpers';

class Payment extends Component {

  render(){
    const deliveryPrice = this.props.orderTotal < 1200 ? 500 : 0;

    return(
      <div>
        <NavBar order={this.props.order} orderTotal={this.props.orderTotal}/>
        <Container id='payment-page'>
          <Header as='h1' id="page-header">Payment</Header>
          <Grid stackable columns={2}>

            <Grid.Column width={4}>
              <Segment id='checkout-sum-box' raised>
                <Header as='h2' id='checkout-sum-total'>Order Summary</Header>
                <Container>
                <p><span role='img' aria-label='pizza'>🍕</span> Pizzas: {formatPrice(this.props.orderTotal)}</p>
                <p><span role='img' aria-label='pizza'>🛵 </span>Delivery: {formatPrice(deliveryPrice)}</p>
                <Header as='h3'>Total: {formatPrice(this.props.checkoutTotal)}</Header>
                <Button as={Link} to='/cart' size='mini' color='teal'>Edit Order</Button>
                </Container>
              </Segment>
            </Grid.Column>

          </Grid>
        </Container>
      </div>


    )
  }
}

export default Payment;
