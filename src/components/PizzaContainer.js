import React from 'react';
import { Grid } from 'semantic-ui-react';
import { PizzaList } from '../data/pizzas';
import Pizza from './Pizza';


const PizzaContainer = (props) => {
  let pizzas = Object.keys(PizzaList).map( key => {
    return <Pizza
              key={key}
              details={PizzaList[key]}
              addToOrder={props.addToOrder}
              index={key}
            />
  });
  return (
      <Grid stackable columns={3}>
        {pizzas}
      </Grid>
  );
}

export default PizzaContainer;
