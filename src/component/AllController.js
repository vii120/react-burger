import React from 'react';
import classes from '../styles/allController.css';
import Controller from './Controller'

const AllController = (props) => {
  const {
    ingredients,
    countIngredient,
    totalPrice,
    canOrder,
    modalSwitch
  } = props
  return (
    <div className={classes.allController}>
    <p>Current Price：<strong><i className="fas fa-dollar-sign"></i> {totalPrice}</strong></p>
    {ingredients.map(item =>
      <Controller
        key={item.type}
        label={item.type}
        price={item.price}
        number={item.number}
        addIngrd={() => countIngredient(item, 'add')}
        removeIngrd={() => countIngredient(item, 'remove')}
        minDisabled={item.number <= 0}
        maxDisabled={item.number >= 3}
      />)}
    <button className={classes.order}
      disabled={!canOrder}
      onClick={modalSwitch} >
      Order Now!
    </button>
  </div>
  )
}
  
export default AllController;