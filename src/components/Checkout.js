import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Segment, Grid, Container, Header, Accordion, Icon, Button } from 'semantic-ui-react';
import {Elements} from 'react-stripe-elements';
import NavBar from './NavBar';
import PaymentForm from './payment/PaymentForm';
import CustomerDetailsForm from './CustomerDetailsForm';
import { formatPrice } from '../helpers';

class Payment extends Component {
  state = {
    activeIndex: 0
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  handleSave = () => {
    this.setState({ activeIndex: 1 });
  }

  render(){
    const { activeIndex } = this.state;
    const deliveryPrice = this.props.orderTotal < 1200 ? 500 : 0;

    return(
      <div>
        <NavBar order={this.props.order} orderTotal={this.props.orderTotal}/>
        <Container id='payment-page'>
          <Header as='h1' id="page-header">Checkout</Header>
          <Grid stackable columns={2}>
            <Grid.Column width={11}>
              <Accordion styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  <span id='checkout-delivery'>Delivery</span>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <CustomerDetailsForm
                    customerDetails={this.props.customerDetails}
                    checkoutTotal={this.props.checkoutTotal}
                    updateCustomerDetails={this.props.updateCustomerDetails}
                    handleSave={this.handleSave}
                  />
                </Accordion.Content>
                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  <span id='checkout-payment'>Payment</span>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <Elements>
                    <Container id="payment-form">
                      <PaymentForm />
                    </Container>
                  </Elements>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>

            <Grid.Column width={5}>
              <Segment id='checkout-sum-box' raised>
                <Header as='h2' color='teal'>Order Summary</Header>
                <Container>
                <p><span role='img' aria-label='pizza'>🍕</span> Pizzas: {formatPrice(this.props.orderTotal)}</p>
                <p><span role='img' aria-label='pizza'>🛵 </span>Delivery: {formatPrice(deliveryPrice)}</p>
                <Header as='h3' color='teal'>Total: {formatPrice(this.props.checkoutTotal)}</Header>
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
