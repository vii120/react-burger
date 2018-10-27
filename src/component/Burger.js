import React from 'react';
import classes from '../styles/burger.css';
import Ingredient from './Ingredient';
import { Scrollbars } from 'react-custom-scrollbars';

const Burger = (props) => {
  const ingredientList = props.ingredients
    .map(item =>
      [...Array(item.number)]  // count values
        .map((blank, index) => <Ingredient type={item.type} key={index} />)
    )
  const ingrdLen = props.ingredients.length &&
    props.ingredients.map(item => item.number).reduce((arr, el) => arr + el)
  return (
    <div className={classes.burger}>
      <Scrollbars>
        <Ingredient type="bread-top" />
        {ingrdLen ? ingredientList : <p>Please start adding ingredients!</p>}
        <Ingredient type="bread-bottom" />
      </Scrollbars>
    </div>
  );
}

export default Burger;