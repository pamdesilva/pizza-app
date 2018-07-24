import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import { Grid, Container, Header, Button } from 'semantic-ui-react';

import NavBar from './NavBar';
import CustomerDetailsForm from './CustomerDetailsForm';
import PaymentForm from './PaymentForm';

class Checkout extends Component {

  state = {
    customerForm: false,
    paymentForm: false,
    completedForm: false
  }

  checkPaymentForm = (bool) => {
    this.setState({ paymentForm: bool});
  }

  checkCustomerForm = () => {
    const { firstName, lastName, email, contactNum, address } = this.props.customerDetails;

    if (firstName && lastName && email && contactNum && address) {
      this.setState({ customerForm: true });
    } else {
      this.setState({ customerForm: false });
    }
  }

  handleSubmit = () => {
    this.checkCustomerForm();

    if(this.state.customerForm && this.state.paymentForm) {
      this.setState({ completedForm: true });
    } else {
      this.setState({ completedForm: false });
    }
  }

  render(){
    if (this.state.completedForm) {
    return <Redirect push to='/confirmed' />;
    }

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
                formStatus={this.checkCustomerForm}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as='h3'>Payment</Header>
              <Elements>
                <PaymentForm formStatus={this.checkPaymentForm} />
              </Elements>
              <Button color='teal' size='large' id='checkout-btn' onClick={this.handleSubmit}>Place Order & Pay</Button>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Checkout;
