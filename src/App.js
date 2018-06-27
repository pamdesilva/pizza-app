import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './components/Home';
import Order from './components/Order';
import Choose from './components/Choose';
import Custom from './components/Custom';
import Done from './components/Done';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/order' component={Order} />
            <Route exact path='/choose' component={Choose} />
            <Route exact path='/custom' component={Custom} />
            <Route exact path='/done' component={Done} />
          </Switch>
          <Footer />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
