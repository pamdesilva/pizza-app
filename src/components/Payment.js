import React from 'react';
import { Grid, Container, Header, Segment, Form, Button } from 'semantic-ui-react';
import {Elements} from 'react-stripe-elements';
import ReviewOrder from './payment/ReviewOrder';
import DeliveryInfo from './payment/DeliveryInfo'
import PaymentForm from './payment/PaymentForm';

const Payment = (props) => (
  <Container id='payment-page'>
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Header as='h2'>Review Your Order</Header>
        <Grid.Column>
          <Segment>
            <DeliveryInfo customerDetails={props.customerDetails} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header as='h4'>Your Order</Header>
            <ReviewOrder
              order={props.order}
            />
          </Segment>
        </Grid.Column>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Header as='h2'>Payment</Header>
        <Elements>
          <Container id="payment-form">
            <PaymentForm />
          </Container>
        </Elements>
      </Segment>
    </Grid.Column>
  </Grid>
</Container>
);

export default Payment;
