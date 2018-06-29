import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PizzaList } from './data/pizzas';

import Header from './layouts/Header';
import Home from './components/Home';
import CustomerDetailsForm from './components/CustomerDetailsForm';
import Menu from './components/Menu';
import Custom from './components/Custom';
import Done from './components/Done';

class App extends Component {

  state = {
    order: [],
    orderTotal: 0,
    customer: {
      firstName: '',
      lastName: '',
      address: {
          addressLineOne: '',
          addressLineTwo: '',
          town: '',
          postcode: ''
        },
      email: '',
      phoneNumber: '',
    }
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

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header order={this.state.order} orderTotal={this.state.orderTotal}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' render={ (props) => <Menu {...props} orderTotal={this.state.orderTotal} addToOrder={this.addToOrder} removeFromOrder={this.removeFromOrder} order={this.state.order} /> } />
            <Route exact path='/custom' component={Custom} />
            <Route exact path='/customer-details-form' component={CustomerDetailsForm} />
            <Route exact path='/done' component={Done} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
