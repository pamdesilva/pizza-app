import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Segment } from 'semantic-ui-react';

class CheckoutForm extends Component {

  state = {
    toPayment: false
  }

  handleChange = (e) => {
    const updateCustomer = {
      ...this.props.customerDetails,
      [e.currentTarget.name]: e.target.value
    }
    this.props.updateCustomerDetails(updateCustomer);
  }

  handleSubmit = () => {
    this.setState({ toPayment: true });
  }

  render(){

    const { firstName, lastName, email, contactNum, address } = this.props.customerDetails;

    if (this.state.toPayment === true) {
      return <Redirect to='/payment' />
    }

    return (
      <Form onSubmit={this.handleSubmit}>
      <Segment>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              label='First name'
              type='text'
              placeholder='First name'
              name='firstName'
              value={firstName}
              onChange={this.handleChange}
              required />
            <Form.Input
              fluid
              label='Last name'
              type='text'
              placeholder='Last name'
              name='lastName'
              value={lastName}
              onChange={this.handleChange}
              required />
          </Form.Group>

          <Form.Input
            label='Email'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
            required />
          <Form.Input
            label='Contact No.'
            type='tel'
            placeholder='Contact No.'
            name='contactNum'
            value={contactNum}
            onChange={this.handleChange}
            required />
          <Form.Input
            label='Address'
            type='text'
            placeholder='Address'
            name='address'
            value={address}
            onChange={this.handleChange}
            required />
          </Segment>
          <Button type='submit' color='violet' floated='right' size='large'>Go to Payment</Button>
        </Form>

    );
  }
}

export default CheckoutForm;
