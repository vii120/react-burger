import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
// import globalClass from '../styles/global.css';
import classes from '../styles/checkout.css';
import Burger from '../component/Burger';
import OrderInfo from '../container/OrderInfo';

class Checkout extends Component {
  state = {
    price: 0,
    ingredients: []
  }
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = []
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        this.setState({ price: param[1] })
      } else {
        ingredients.push({ type: param[0], number: +param[1] })
      }
    }
    this.setState({ ingredients })
  }
  render() {
    return (
      <div className={classes.checkout}>
        <p>Your burger is here!</p>
        <div style={{ width: '100%' }}>
          <Burger ingredients={this.state.ingredients} />
        </div>
        {/* <button className={[globalClass.btn, globalClass.cancel].join(' ')}
          onClick={() => this.props.history.goBack()} >
          Cancel
        </button>
        <button className={[globalClass.btn, globalClass.continue].join(' ')}
          onClick={() => this.props.history.replace('/checkout/orderinfo')} >
          Continue
        </button>
        <Route path="/checkout/orderinfo" render={() => (
          <OrderInfo ingredients={this.state.ingredients} price={this.state.price} />
        )} /> */}
        <OrderInfo ingredients={this.state.ingredients} price={this.state.price} />
      </div>
    );
  }
}

export default Checkout;