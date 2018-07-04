import React, { Fragment, Component } from 'react';
import { Link  } from 'react-router-dom';
import { Header, List, Button } from 'semantic-ui-react';

class DeliveryInfo extends Component {
  render(){
    const { firstName, lastName, email, contactNum, address } = this.props.customerDetails;
    return (
      <Fragment>
        <Header as='h4'>Customer Details</Header>
        <List>
          <List.Item><strong>Name:</strong> {firstName} {lastName}</List.Item>
          <List.Item><strong>Email:</strong> {email}</List.Item>
          <List.Item><strong>Contact No:</strong> {contactNum}</List.Item>
          <List.Item><strong>Delivery address:</strong> {address}</List.Item>
        </List>
        <Button as={Link} to="/customer-details" color='violet' size='mini'>Edit</Button>
      </Fragment>
    );
  }
}

export default DeliveryInfo;
