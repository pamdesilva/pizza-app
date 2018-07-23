import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {injectStripe, CardElement, CardNumberElement, CardCVCElement, CardExpiryElement } from 'react-stripe-elements';
import { Form, Button, Segment, Modal } from 'semantic-ui-react';

class PaymentForm extends Component {

  state = {
    cardNumber: false,
    cardExpiry: false,
    cvc: false,
    completed: false
  }

  handleSubmit = (e) => {
     e.preventDefault();
     if (this.state.cardNumber && this.state.cardExpiry && this.state.cvc) {
       this.setState({ completed: true });
     }
   };

   stripeElementChange = (element, name) => {
    if (!element.empty && element.complete) {
      this.setState({ [name]: true });
    }
  }

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

    if (this.state.completed) {
    return <Redirect push to='/confirmed' />;
    }

    return (
      <div>
        <Modal trigger={<Button size='tiny' color='teal'>💳 Use test card</Button>} closeIcon>
          <Modal.Header>Test Card Details</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p><strong>Card number:</strong> 4242424242424242</p>
              <p><strong>Expiration date:</strong> 20/20</p>
              <p><strong>CVC:</strong> 123</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <label>
              Card number
              <CardNumberElement
                {...createOptions(this.props.fontSize)}
                options={{creditCard: true}}
                onChange={(element) => this.stripeElementChange(element, 'cardNumber')}
              />
            </label>
            <label>
              Expiration date
              <CardExpiryElement
                {...createOptions(this.props.fontSize)}
                onChange={(element) => this.stripeElementChange(element, 'cardExpiry')}
              />
            </label>
            <label>
              CVC
              <CardCVCElement
                {...createOptions(this.props.fontSize)}
                onChange={(element) => this.stripeElementChange(element, 'cvc')}
              />
            </label>
          </Form>
        </Segment>
      <Button color='violet' size='large' id='checkout-btn' onClick={this.handleSubmit}>Place Order & Pay</Button>
    </div>
    );
  }
}

export default injectStripe(PaymentForm);
