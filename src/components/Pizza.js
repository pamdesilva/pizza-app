import React, { Component } from 'react';
import { Grid, Image, Button, Segment } from 'semantic-ui-react';
import { formatPrice, formatToppings } from '../helpers';

class Pizza extends Component {
  render(){
    const {name, toppings, image, price } = this.props.details;
    return(
      <Grid.Column>
        <Segment>
          <Image id="menu-pizza-img" src={image} />
          <h3>{name}</h3>
          <p>{formatToppings(toppings)}</p>
          <h4>{formatPrice(price)}</h4>
          <p>
            <Button onClick={() => this.props.addToOrder(this.props.index)}>Add to order</Button>
          </p>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Pizza;
