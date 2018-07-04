import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class AddressSection extends Component {
  render() {
    return (
      <Form.Input label='Address' type='address' placeholder='address' />
    );
  }
}

export default AddressSection;
