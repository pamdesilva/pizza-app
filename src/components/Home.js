import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div>
    <Jumbotron className="home-jumbotron">
      <h1>Welcome to Pie in the Sky!</h1>
      <p>
        Piping hot pizzas delivered to your doorstep.
      </p>
      <p>
        <NavLink to="/menu"><Button bsSize="large" bsStyle="primary" className="home-order-btn">Begin your order</Button></NavLink>
      </p>
    </Jumbotron>
  </div>
);

export default Home;
