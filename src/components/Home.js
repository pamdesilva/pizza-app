import React from 'react';
import { Container, Segment, Button, Header, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div id='home-page'>
      <Header as='h1' as={Link} to='./' id="home-logo">Slices</Header>
      <Container id="home-content">
        <Container>
          <Header id="home-header">The best pizzas in town!</Header>
          <p>Find out if we deliver to your hood</p>
          <Form size='huge'>
          <Form.Group>
            <Form.Input placeholder='Enter your postcode' width={6} id='home-postcode-input' />
            <Form.Button color='violet' id='home-postcode-btn' size='huge' width={10}>Check now</Form.Button>
          </Form.Group>
          </Form>
        </Container>
      </Container>
  </div>
);

export default Home;
