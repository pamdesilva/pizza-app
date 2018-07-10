import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

import NavBar from './NavBar';
import CheckoutForm from './CheckoutForm';

class Payment extends Component {

  render(){
    return(
      <div>
        <NavBar order={this.props.order} orderTotal={this.props.orderTotal}/>
        <Container id='payment-page'>
          <Header as='h1' id="page-header">Your Details</Header>
            <CheckoutForm
              customerDetails={this.props.customerDetails}
              checkoutTotal={this.props.checkoutTotal}
              updateCustomerDetails={this.props.updateCustomerDetails}
            />
        </Container>
      </div>


    )
  }
}

export default Payment;
