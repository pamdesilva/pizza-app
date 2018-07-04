import React, { Component } from 'react';
import {injectStripe, CardElement} from 'react-stripe-elements';
import { Grid, Container, Header, Segment, Form, Button } from 'semantic-ui-react';

import AddressSection from './AddressSection';
import CardSection from './CardSection';

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
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='First name'
            placeholder='First name'
            required />
          <Form.Input
            fluid
            label='Last name'
            placeholder='Last name'
            required />
        </Form.Group>
        <CardSection />
        <Button floated='right' color='violet' size='large'>Confirm order</Button>
      </Form>
    );
  }
}

export default injectStripe(PaymentForm);
