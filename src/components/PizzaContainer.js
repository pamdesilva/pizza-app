import React from 'react';
import { Row } from 'react-bootstrap';
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
      <Row>
        {pizzas}
      </Row>
  );
}

export default PizzaContainer;
