import React, { Component } from 'react';
import {injectStripe, CardElement } from 'react-stripe-elements';
import { Form, Button, Segment } from 'semantic-ui-react';

class PaymentForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Segment>
          <p><strong>Cardholder's Name</strong></p>
          <Form.Input
            fluid
            placeholder='Name'
            required />
          <p><strong>Card Details</strong></p>
          <Segment>
            <CardElement style={{base: {fontSize: '12px'}}} />
          </Segment>
        </Segment>
        <Button type='submit' color='violet' floated='right' size='large'>Place Order & Pay</Button>
      </Form>
    );
  }
}

export default injectStripe(PaymentForm);
