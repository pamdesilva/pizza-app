import React, { Component } from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import { PizzaList } from '../../data/pizzas';
import { formatPrice } from '../../helpers';

class ReviewOrder extends Component {

  renderOrder = (key) => {
    const pizza = PizzaList[key];
    const count = this.props.order[key];

    return(
      <Segment key={key}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={pizza.image} />
            </Grid.Column>
            <Grid.Column width={12}>
              <p>Quantity: {count}</p>
              <p>Total: {formatPrice(count * pizza.price)}</p>
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

export default ReviewOrder;
