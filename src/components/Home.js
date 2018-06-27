import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <Jumbotron>
      <h1>Welcome to Pie in the Sky!</h1>
      <p>
        Piping hot pizzas delivered to your doorstep.
      </p>
      <p>
        <Button bsStyle="primary">Order now!</Button>
      </p>
    </Jumbotron>
  </div>
);

export default Home;
