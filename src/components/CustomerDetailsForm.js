import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';

class CustomerDetailsForm extends Component {

  handleChange = (e) => {
    const updateCustomer = {
      ...this.props.customerDetails,
      [e.currentTarget.name]: e.target.value
    }
    this.props.updateCustomerDetails(updateCustomer);
  }

  render(){

    const { firstName, lastName, email, contactNum, address } = this.props.customerDetails;

    return (
    <div>
      <Button size='tiny' color='teal' onClick={this.props.loadSampleCustomer}>🧔🏻‍ Fill with fake customer</Button>
      <Segment>
        <Form id='checkout-customer-form'>
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
        </Form>
      </Segment>
    </div>
    );
  }
}

export default CustomerDetailsForm;
