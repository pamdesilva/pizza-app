import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
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

    const { firstName, lastName, email, contactNum, address } = this.props.customerDetails;

    return(
      <div>
      <Menu secondary id='navbar'>
        <Menu.Item header id='navbar-header'>Slices</Menu.Item>
      </Menu>
        <Container textAlign='center'>
          <Header as='h1' id='page-header'>Thanks, {firstName}!</Header>
          <p id='confirmation-text'>Your order, <strong>#2222</strong> is now being prepped and will be delivered within the next hour.</p>
          <Image centered id='confirmed-img'  src='https://media.giphy.com/media/j1p1Z7XaX8HEQ/giphy.gif' />
          <Button onClick={this.handleClick} color='violet' size='large' id='confirmed-new-btn'>Start a fresh order</Button>
        </Container>
      </div>
    )
  }
};

export default Confirmation;
