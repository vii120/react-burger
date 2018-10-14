import React, { Component } from 'react';
import classes from './App.css';
import Layout from './container/Layout'
import BurgerBuilder from './container/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;

// 左邊 burger 右邊 controller
// 加入快速組合