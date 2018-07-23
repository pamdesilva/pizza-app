import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {injectStripe, CardElement, CardNumberElement, CardCVCElement, CardExpiryElement, PostalCodeElement } from 'react-stripe-elements';
import { Form, Button, Segment } from 'semantic-ui-react';

class PaymentForm extends Component {

  handleSubmit = (e) => {
     e.preventDefault();
     if (this.props.stripe) {
       this.props.stripe
         .createToken()
         .then((payload) => console.log('[token]', payload));
     } else {
       console.log("Stripe.js hasn't loaded yet.");
     }
   };

  render() {

    const createOptions = (fontSize, padding) => {
      return {
        style: {
          base: {
            fontSize,
            color: '#424770',
            letterSpacing: '0.025em',
            '::placeholder': {
              color: '#aab7c4',
            },
            padding,
          },
          invalid: {
            color: '#9e2146',
          },
        },
      };
    };

    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            {...createOptions(this.props.fontSize)} />
        </label>
        <label>
          Expiration date
          <CardExpiryElement
            {...createOptions(this.props.fontSize)} />
        </label>
        <label>
          CVC
          <CardCVCElement
            {...createOptions(this.props.fontSize)} />
        </label>
        <label>
          Postal code
          <PostalCodeElement
            {...createOptions(this.props.fontSize)} />
        </label>

      </Form>
    <Button color='violet' floated='right'>Place Order & Pay</Button>
    </div>
    );
  }
}

export default injectStripe(PaymentForm);
