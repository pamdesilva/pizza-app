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
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/menu' component={Menu} />
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
