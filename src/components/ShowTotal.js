import React, { Component } from 'react';
import { formatPrice } from '../helpers';

const ShowTotal = (props) => (
  <div>{formatPrice(props.orderTotal)}</div>
)

export default ShowTotal;
