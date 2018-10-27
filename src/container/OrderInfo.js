import React, { Component } from 'react';
import globalClass from '../styles/global.css';
import classes from '../styles/orderInfo.css';
import axios from '../axios/order'
import Spinner from '../component/Spinner'
import { withRouter } from 'react-router-dom'

class OrderInfo extends Component {
  state = {
    name: '',
    email: '',
    loading: false,
    checking: false,
    msg: ''
  }
  checkInfo = () => {
    const checkName = !!this.state.name.trim().length
    const checkMail = !!this.state.email.trim().length
    console.log(checkName, checkMail)
    if (checkName && checkMail) {
      this.confirmOrder()
    } else {
      this.setState({
        checking: true,
        msg: `${checkName ? 'Email' : 'Full Name'} is required!`
      })
    }
  }
  confirmOrder = () => {
    this.setState({ loading: true })
    let insideBurger = {}
    this.props.ingredients.forEach(item => {
      if (item.number !== 0) {
        insideBurger = { ...insideBurger, [item.type]: item.number }
      }
    }
    )
    const orderDetail = {
      insideBurger,
      totalPrice: this.props.price,
      customer: {
        name: this.state.name,
        mail: this.state.email
      },
      delivery: 'DHL'
    }
    axios.post('/orders.json', orderDetail)  // .json: used for firebase
      .then(response => {
        console.log(response)
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
        this.setState({ loading: false })
      })
  }
  render() {
    return (
      <div className={classes.orderInfo}>
        {this.state.loading ? <Spinner /> : null}
        <h3>Please enter your receive information</h3>
        {this.state.checking ? <p style={{ color: '#e4412e' }}>{this.state.msg}</p> : null}
        <label htmlFor="name">
          <div>Full Name</div>
          <input type="text" placeholder="your name" id="name"
            onChange={e => this.setState({ name: e.target.value })} />
        </label>
        <label htmlFor="email">
          <div>Email</div>
          <input type="text" placeholder="your email" id="email"
            onChange={e => this.setState({ email: e.target.value })} />
        </label>
        <button className={globalClass.btn} onClick={this.checkInfo}>Send</button>
      </div>
    );
  }
}

export default withRouter(OrderInfo);