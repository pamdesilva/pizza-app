import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import { Grid, Container, Header } from 'semantic-ui-react';

import NavBar from './NavBar';
import CustomerDetailsForm from './CustomerDetailsForm';
import PaymentForm from './PaymentForm';

class Payment extends Component {

  render(){
    return(
      <div>
        <NavBar order={this.props.order} orderTotal={this.props.orderTotal}/>
        <Container id='payment-page'>
          <Header as='h1' id="page-header">Checkout</Header>
          <Grid stackable columns={2}>
            <Grid.Column width={10}>
              <Header as='h3'>Your Details</Header>
              <CustomerDetailsForm
                customerDetails={this.props.customerDetails}
                checkoutTotal={this.props.checkoutTotal}
                updateCustomerDetails={this.props.updateCustomerDetails}
                loadSampleCustomer={this.props.loadSampleCustomer}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as='h3'>Payment</Header>
              <Elements>
                <PaymentForm />
              </Elements>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Payment;
