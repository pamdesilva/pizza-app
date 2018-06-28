import React from 'react';
import { Row } from 'react-bootstrap';
import { PizzaList } from '../data/pizzas';
import Pizza from './Pizza';


const PizzaContainer = () => {
  let pizzas = PizzaList.map((pizza) => {
    return <Pizza name={pizza.name}
                   toppings={pizza.toppings}
                   img={pizza.img_src}
                   price={pizza.price}
                   key={pizza.id} />
  });
  return (
      <Row>
        {pizzas}
      </Row>
  );
}


export default PizzaContainer;
