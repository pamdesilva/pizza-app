import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Form, Label, Modal, Button } from 'semantic-ui-react';

class Home extends Component {

  static propTypes = {
    updatePostcode: PropTypes.func.isRequired
  }

  state = {
    postcode: '',
    validPostcode: true
  }

  handleChange = (e) => {
    this.setState({ postcode: e.target.value })
  }

  handlePostcodeSubmit = () => {
    const formattedPostcode = this.state.postcode.toUpperCase().replace(/\s/g, "");

    if(formattedPostcode === 'LDN123') {
      this.props.history.push('/menu');
      this.setState({
        postcode: formattedPostcode
      });
      this.props.updatePostcode(formattedPostcode);
    } else {
      this.setState({
        validPostcode: false
      });
    }
  }

  closeModal = () => {
    this.setState({
      postcode: '',
      validPostcode: true
    });
  }

  render(){

    return(
      <div id='home-page'>
        <Container >
          <Header as='h1' id="home-logo">Slices</Header>
          <Container id="home-content">
            <Header as='h1' id="home-header">Delicious pizzas delivered to your doorstep</Header>
            <Form size='large' onSubmit={this.handlePostcodeSubmit} fluid='true'>
              <Form.Group >
                <Form.Input placeholder='Enter your postcode' name='postcode' onChange={this.handleChange} value={this.state.postcode} width={4} required id='home-form'/>
                <Form.Button type='submit' color='teal' size='large' width={4} id='home-btn'>Get Started</Form.Button>
              </Form.Group>
              <Label color='orange' size='medium' id='home-label'><span role='img' aria-label='point-right'>👉</span> Hint: We only deliver to postcode 'LDN 123' right now</Label>
            </Form>
          </Container>
        </Container>

        <Modal open={!this.state.validPostcode} size='mini' id='home-modal'>
          <Modal.Header>We'd love to send you a slice of the action, but..</Modal.Header>
          <Modal.Content>
            <p>It looks like you're located outside our delivery area <span role='img' aria-label='cat-sad'>😿</span></p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.closeModal} color='violet'>Try a different postcode</Button>
          </Modal.Actions>
       </Modal>
     </div>
    )
  }
};

export default Home;
