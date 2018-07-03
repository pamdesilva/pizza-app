import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PizzaList } from '../data/pizzas';

import Header from '../layouts/Header';
import Home from './Home';
import CustomerDetailsForm from './CustomerDetailsForm';
import Menu from './Menu';
import Custom from './Custom';
import Done from './Done';
import Cart from './Cart';

class App extends Component {

  state = {
    order: [],
    orderTotal: 0,
    checkoutTotal: 0,
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
    }
  }

  componentDidMount(){
    const localStorageOrder = localStorage.getItem('order');
    const localStorageTotal = localStorage.getItem('orderTotal');
    if(localStorageOrder) {
      this.setState({
        order: JSON.parse(localStorageOrder),
        orderTotal: JSON.parse(localStorageTotal)
      });
    }
  }

  componentDidUpdate(){
    console.log('It updated!');
    localStorage.setItem('order', JSON.stringify(this.state.order));
    localStorage.setItem('orderTotal', JSON.stringify(this.state.orderTotal));
  }

  addToOrder = (key) => {
    const order = { ...this.state.order};
    order[key] = order[key] + 1 || 1;
    const newTotal = this.state.orderTotal + PizzaList[key].price;

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }

  removeFromOrder = (key) => {
    const order = { ...this.state.order};
    const newTotal = this.state.orderTotal - (PizzaList[key].price * order[key]);
    delete order[key];

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }

  updateCheckoutTotal = (newTotal) => {
    this.setState({
      checkoutTotal: newTotal
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header order={this.state.order} orderTotal={this.state.orderTotal}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' render={ (props) => <Menu {...props} orderTotal={this.state.orderTotal} addToOrder={this.addToOrder} removeFromOrder={this.removeFromOrder} order={this.state.order} /> } />
            <Route exact path='/cart' render={ (props) => <Cart {...props} orderTotal={this.state.orderTotal} removeFromOrder={this.removeFromOrder} order={this.state.order} updateCheckoutTotal={this.updateCheckoutTotal} /> } />
            <Route exact path='/custom' component={Custom} />
            <Route exact path='/customer-details' component={CustomerDetailsForm} />
            <Route exact path='/done' component={Done} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
