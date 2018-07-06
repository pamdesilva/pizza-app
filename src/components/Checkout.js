import React, { Component } from 'react';
import { Grid, Container, Header, Segment, Accordion, Icon, Button } from 'semantic-ui-react';
import {Elements} from 'react-stripe-elements';
import NavBar from './NavBar';
import PaymentForm from './payment/PaymentForm';
import CustomerDetailsForm from './CustomerDetailsForm';


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
    const { activeIndex } = this.state
    return(
      <div>
        <NavBar order={this.props.order} orderTotal={this.props.orderTotal}/>
        <Container id='payment-page'>
          <Header as='h1' id="page-header">Checkout</Header>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Accordion styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  <span id='payment-subheader-delivery'>Delivery</span>
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
                  Payment
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

            <Grid.Column>
              <Container id='checkout-sum-box'>
                Total box
              </Container>
            </Grid.Column>
          </Grid>

        </Container>
      </div>


    )
  }
}

export default Payment;
