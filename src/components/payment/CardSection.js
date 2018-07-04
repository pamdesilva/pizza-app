import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, CardElement, PostalCodeElement } from 'react-stripe-elements';
import { Segment } from 'semantic-ui-react';

class CardSection extends Component {
  render() {
    return (
      <Segment>
        <CardElement style={{base: {fontSize: '12px'}}} />
      </Segment>
    );
  }
}

export default CardSection;
