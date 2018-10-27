import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import classes from './App.css';

import Layout from './container/Layout'
import BurgerBuilder from './container/BurgerBuilder';
import Checkout from './container/Checkout';
import OrderHistory from './container/OrderHistory';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orderhistory" component={OrderHistory} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

// 左邊 burger 右邊 controller
// 加入快速組合