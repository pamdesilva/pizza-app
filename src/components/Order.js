import React, { Component } from 'react';
import { Grid, Image, Segment, Icon } from 'semantic-ui-react';
import { PizzaList } from '../data/pizzas';
import { formatPrice } from '../helpers';

class Order extends Component {

  renderOrder = (key) => {
    const pizza = PizzaList[key];
    const count = this.props.order[key];

    return(
      <Segment raised key={key}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={pizza.image} />
            </Grid.Column>
            <Grid.Column width={12}>
              <p><strong>{pizza.name}</strong><Icon name='delete' circular id="order-delete" onClick={() => this.props.removeFromOrder(key)} /></p>
              <p>Quantity: {count}</p>
              <p>Price per pizza: {formatPrice(pizza.price)}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  render(){
    const orderIds = Object.keys(this.props.order);

    return(
      <div>
          {orderIds.map(this.renderOrder)}
      </div>
    );
  }
}

export default Order;
