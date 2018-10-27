import React, { Component } from 'react';
import axios from '../axios/order'
import SmallBurger from '../component/SmallBurger';
// import classes from '../styles/smallBurger.css';

class OrderHistory extends Component {
  componentDidMount() {
    this.setState({ loading: true })
    axios.get('orders.json')
      .then(res => {
        const resData = Object.values(res.data)
        resData.map((item, i) => resData[i].id = i)
        this.setState({ loading: false, orders: resData })
        console.log(resData)
      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false })
      })
  }
  state = {
    orders: [],
    loading: false
  }
  render() {
    return (
      <div>
        {/* {this.state.orders.map(order =>
          <div key={order.id}>
            {order.customer.name}
            <SmallBurger type="bread-top" />
            {
              Object.keys(order.insideBurger).map(ingrd =>
                [...Array(order.insideBurger[ingrd])].map((arr, i) =>
                  <SmallBurger type={ingrd} key={i} />
                )
              )
            }
            <SmallBurger type="bread-bottom" />
          </div>
        )} */}
        <SmallBurger type="bread-top" />
        <span>the page is under construction!</span>
        <SmallBurger type="bread-bottom" />
      </div>
    );
  }
}

export default OrderHistory;