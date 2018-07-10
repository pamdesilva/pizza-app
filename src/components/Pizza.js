import React, { Component } from 'react';
import { Grid, Image, Button, Segment, Header } from 'semantic-ui-react';
import { formatPrice, formatToppings } from '../helpers';

class Pizza extends Component {
  render(){
    const {name, toppings, image, price } = this.props.details;
    return(
      <Grid.Column>
        <Segment id='pizza-card' raised>
          <Image id='menu-pizza-img' src={image} />
          <Header as='h3'>{name}</Header>
          <p>{formatToppings(toppings)}</p>
          <div id='pizza-order-info'>
            <Header as='h3'>{formatPrice(price)}</Header>
            <p>
              <Button onClick={() => this.props.addToOrder(this.props.index)} color='teal'>Add to order</Button>
            </p>
          </div>

        </Segment>
      </Grid.Column>
    )
  }
}

export default Pizza;
