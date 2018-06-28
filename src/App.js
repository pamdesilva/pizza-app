import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './layouts/Header';
import Home from './components/Home';
import CustomerDetailsForm from './components/CustomerDetailsForm';
import Menu from './components/Menu';
import Custom from './components/Custom';
import Done from './components/Done';

class App extends Component {

  state = {
    order: [],
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
  },
  totalPrice: 0
  }

  addToOrder = (key) => {
    const order = { ...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order: order});
  }

  removeFromOrder = (key) => {
    console.log('remove this pizza');
    const order = { ...this.state.order};
    delete order[key];
    this.setState({ order: order })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' render={ (props) => <Menu {...props} addToOrder={this.addToOrder} removeFromOrder={this.removeFromOrder} order={this.state.order} /> } />
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
