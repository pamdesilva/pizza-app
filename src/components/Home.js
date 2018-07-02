import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div >
    <Segment id="home-jumbotron">
      <h1>Welcome to Pie in the Sky!</h1>
      <p>
        Piping hot pizzas delivered to your doorstep.
      </p>
      <p>
        <Link to="/menu"><Button primary size='big' id="home-order-btn">Begin your order</Button></Link>
      </p>
    </Segment>
  </div>
);

export default Home;
