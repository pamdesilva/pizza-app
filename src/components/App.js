import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';
import { PizzaList } from '../data/pizzas';

import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';
import Checkout from './Checkout';

class App extends Component {

  state = {
    order: [],
    orderTotal: 0,
    checkoutTotal: 0,
    postcode:'',
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      contactNum: '',
      address: '',
    }
  }

  componentDidMount(){
    const localStorageOrder = localStorage.getItem('order');
    const localStorageOrderAmount = localStorage.getItem('orderAmount');
    const localStorageTotal = localStorage.getItem('total');
    const localStorageCustomerDetails = localStorage.getItem('customerDetails');
    if(localStorageOrder) {
      this.setState({
        order: JSON.parse(localStorageOrder),
        orderTotal: JSON.parse(localStorageOrderAmount),
        checkoutTotal: JSON.parse(localStorageTotal),
        customer: JSON.parse(localStorageCustomerDetails)
      });
    }
    console.log(this.state.customer.firstName);
  }

  componentDidUpdate(){
    localStorage.setItem('order', JSON.stringify(this.state.order));
    localStorage.setItem('orderAmount', JSON.stringify(this.state.orderTotal));
    localStorage.setItem('total', JSON.stringify(this.state.checkoutTotal));
    localStorage.setItem('customerDetails', JSON.stringify(this.state.customer));
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

  updateCustomerDetails = (updatedCustomerDetails) => {
    let customerDetails = {...this.state.customer};
    customerDetails = updatedCustomerDetails;
    this.setState({
      customer: customerDetails
    });
  }

  updatePostcode = (newPostcode) => {
    this.setState({
      postcode: newPostcode
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' render={ (props) =>
              <Home {...props}
              updatePostcode={this.updatePostcode} /> } />
            <Route exact path='/menu' render={ (props) =>
              <Menu {...props}
                orderTotal={this.state.orderTotal}
                addToOrder={this.addToOrder}
                removeFromOrder={this.removeFromOrder}
                order={this.state.order} /> } />
            <Route exact path='/cart' render={ (props) =>
              <Cart {...props}
                orderTotal={this.state.orderTotal}
                removeFromOrder={this.removeFromOrder}
                order={this.state.order}
                updateCheckoutTotal={this.updateCheckoutTotal} /> } />
              <Route exact path='/checkout' render={ (props) =>
              <StripeProvider apiKey='pk_test_12345'>
                <Checkout {...props}
                  orderTotal={this.state.orderTotal}
                  order={this.state.order}
                  customerDetails={this.state.customer}
                  checkoutTotal={this.state.checkoutTotal}
                  updateCustomerDetails={this.updateCustomerDetails} />
              </StripeProvider> } />
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
