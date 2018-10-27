import React, { Component } from 'react';
import Burger from '../component/Burger';
import AllController from '../component/AllController';
import Modal from '../component/Modal';
// import axios from '../axios/order'

class BurgerBuilder extends Component {
  state = {
    ingredients: [
      { type: 'tomato', number: 0, price: 5 },
      { type: 'lettuce', number: 0, price: 3 },
      { type: 'bacon', number: 0, price: 12 },
      { type: 'cheese', number: 0, price: 8 },
      { type: 'onion', number: 0, price: 3 },
      { type: 'meat', number: 0, price: 15 },
    ],
    totalPrice: 10,
    showModal: false,
    modalLoading: false
  }
  /** count the number and price of type */
  countIngredient = (type, method) => {
    const ingredients = [...this.state.ingredients];
    const index = ingredients.indexOf(type);
    let totalPrice = this.state.totalPrice;
    const itemPrice = ingredients[index].price;
    if (method === "add") {
      ingredients[index].number += 1;
      totalPrice += itemPrice;
    } else if (method === "remove" && ingredients[index].number > 0) {
      ingredients[index].number -= 1;
      totalPrice -= itemPrice;
    }
    this.setState({ ingredients, totalPrice })
  }
  modalSwitch = () => {
    const showModal = !this.state.showModal
    this.setState({ showModal })
  }

  gotoCheckout = () => {
    // this.setState({ modalLoading: true })
    // let insideBurger = {}
    // this.state.ingredients.forEach(item => {
    //   if (item.number !== 0) {
    //     insideBurger = { ...insideBurger, [item.type]: item.number }
    //   }
    // }
    // )
    // const orderDetail = {
    //   insideBurger,
    //   totalPrice: this.state.totalPrice,
    //   customer: {
    //     name: 'robin',
    //     mail: 'robin.s@gmail.com'
    //   },
    //   delivery: 'DHL'
    // }
    // axios.post('/orders.json', orderDetail)  // .json: used for firebase
    //   .then(response => {
    //     this.setState({ modalLoading: false, showModal: false })
    //     // console.log(response)
    //   })
    //   .catch(error => {
    //     this.setState({ modalLoading: false, showModal: false })
    //     // console.log(error)
    //   })
    const queryParams = [];
    this.state.ingredients
      .filter(item => item.number !== 0)
      .map(item => queryParams.push(encodeURIComponent(item.type) + '=' + encodeURIComponent(item.number)))
    queryParams.push(`price=${this.state.totalPrice}`)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`
    })
  }

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <AllController
          ingredients={this.state.ingredients}
          countIngredient={this.countIngredient}
          totalPrice={this.state.totalPrice}
          canOrder={this.state.ingredients.some(item => item.number > 0)}
          modalSwitch={this.modalSwitch}
        />
        <Modal showModal={this.state.showModal}
          modalSwitch={this.modalSwitch}
          gotoCheckout={this.gotoCheckout}
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          modalLoading={this.state.modalLoading} >
        </Modal>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;