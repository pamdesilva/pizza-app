import React, { Component} from 'react';
import { Container, Header, Form, Label, Modal, Button } from 'semantic-ui-react';

class Home extends Component {

  state = {
    postcode: '',
    validPostcode: true
  }

  handleChange = (e) => {
    this.setState({ postcode: e.target.value })
  }

  handlePostcodeSubmit = () => {
    const formattedPostcode = this.state.postcode.toUpperCase().replace(/\s/g, "");

    if(formattedPostcode === 'BBB') {
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
        <Header as='h1' id="home-logo">Slices</Header>
        <Container id="home-content">
          <Container>
            <Header id="home-header">The best pizzas in town!</Header>
            <p>Find out if we deliver to your hood</p>
            <Form size='large' onSubmit={this.handlePostcodeSubmit}>
              <Form.Group >
                <Form.Input placeholder='Enter your postcode' name='postcode' onChange={this.handleChange} value={this.state.postcode} width={6} id='home-postcode-input' />
                <Form.Button color='violet' id='home-postcode-btn' size='large' width={10}>Check</Form.Button>
              </Form.Group>
              <Label color='yellow' tag>Hint: we only deliver to 'BBB' right now</Label>
            </Form>
          </Container>
        </Container>

        <Modal open={!this.state.validPostcode} size='mini'>
          <Modal.Header>Oh snap!</Modal.Header>
          <Modal.Content>
            <p>We're sorry but your location is outside our delivery area.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.closeModal} color='violet'>Try another postcode</Button>
          </Modal.Actions>
       </Modal>
    </div>
    )
  }
};

export default Home;
