import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Header, Menu, Image, Button } from 'semantic-ui-react';

class Confirmation extends Component {
  state = {
    newOrder: false
  }

  handleClick = () => {
    this.props.clearState();
    this.setState({ newOrder: true });
  }

  render(){
    if(this.state.newOrder) {
      return <Redirect push to='/' />;
    }

    const { firstName, address } = this.props.customerDetails;

    return(
      <div>
      <Menu secondary id='navbar'>
        <Menu.Item header id='navbar-header'>Slices</Menu.Item>
      </Menu>
        <Container textAlign='center'>
          <Header as='h1' id='page-header'>Thanks, {firstName}!</Header>
          <p id='confirmation-text'>Your order, <strong>#2222</strong> is now being prepped and will be delivered to: </p>
          <p><strong>{address}</strong></p>
          <p>within the next hour 🛵 </p>
          <Image centered id='confirmed-img'  src='https://media.giphy.com/media/j1p1Z7XaX8HEQ/giphy.gif' />
          <Button onClick={this.handleClick} color='teal' size='large' id='confirmed-new-btn'>Start a fresh order</Button>
        </Container>
      </div>
    )
  }
};

export default Confirmation;
