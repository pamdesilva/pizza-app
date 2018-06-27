import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { PizzaList } from '../data/pizzas';
import Pizza from './Pizza';


const PizzaContainer = () => {
  let pizzas = PizzaList.map((pizza) => {
    return <Pizza name={pizza.name}
                   toppings={pizza.toppings}
                   img={pizza.img_src}
                   key={pizza.id} />
  });
  return (
    <Grid>
      <Row className="is-table-row">
        {pizzas}
      </Row>
    </Grid>
  );
}


export default PizzaContainer;
