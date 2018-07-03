import React, { Component } from 'react';
import { Grid, Image, Button, Segment, Header } from 'semantic-ui-react';
import { formatPrice, formatToppings } from '../helpers';

class Pizza extends Component {
  render(){
    const {name, toppings, image, price } = this.props.details;
    return(
      <Grid.Column>
        <Segment>
          <Image id="menu-pizza-img" src={image} />
          <Header as='h3'>{name}</Header>
          <p>{formatToppings(toppings)}</p>
          <Header as='h4'>{formatPrice(price)}</Header>
          <p>
            <Button onClick={() => this.props.addToOrder(this.props.index)}>Add to order</Button>
          </p>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Pizza;
