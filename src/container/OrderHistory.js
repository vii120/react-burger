import React, { Component } from 'react';
import axios from '../axios/order'
import SmallBurger from '../component/SmallBurger';
import classes from '../styles/orderHistory.css'

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
    loading: false,
    orders: [],
    sortIngrd: ['tomato', 'lettuce', 'bacon', 'cheese', 'onion', 'meat',]  // sorted ingredient
  }
  render() {
    const { loading, orders, sortIngrd } = this.state
    return (
      <div className={classes.orderHistory}>
        {loading && 'loading...'}
        {orders.reverse().map(order => {
          const showIngrd = sortIngrd.filter(item => Object.keys(order.insideBurger).includes(item))
          return (
            <div key={order.id} className={classes.burgerItem}>
              <div className={classes.orderName}>{order.customer.name}</div>
              <SmallBurger type="bread-top" />
              {
                showIngrd.map(ingrd =>
                  [...Array(order.insideBurger[ingrd])].map((arr, i) =>
                    <SmallBurger type={ingrd} key={i} />
                  )
                )
              }
              <SmallBurger type="bread-bottom" />
            </div>
          )
        }
        )}
        {/* <SmallBurger type="bread-top" />
        <span>the page is under construction!</span>
        <SmallBurger type="bread-bottom" /> */}
      </div>
    );
  }
}

export default OrderHistory;