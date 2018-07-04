import React from 'react';
import { Segment, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div >
    <Segment id="home-jumbotron">
      <Header as="h1">Welcome to Pie in the Sky!</Header>
      <p>
        Piping hot pizzas delivered to your doorstep.
      </p>
      <p>
        <Link to="/menu"><Button color='violet' size='big' id="home-order-btn">Begin your order</Button></Link>
      </p>
    </Segment>
  </div>
);

export default Home;
