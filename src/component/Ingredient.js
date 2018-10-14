import React, { Component } from 'react';
import classes from '../styles/ingredient.css';
import PropTypes from 'prop-types';

class Ingredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <div className={classes.breadBottom}></div>;
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.breadTop}>
            <div className={classes.seeds1}></div>
            <div className={classes.seeds2}></div>
          </div>
        );
        break;
      case ('meat'):
        ingredient = <div className={classes.meat}></div>;
        break;
      case ('cheese'):
        ingredient = <div className={classes.cheese}></div>;
        break;
      case ('salad'):
        ingredient = <div className={classes.salad}></div>;
        break;
      case ('bacon'):
        ingredient = <div className={classes.bacon}></div>;
        break;
      case ('tomato'):
        ingredient = <div className={classes.tomato}></div>;
        break;
      case ('onion'):
        ingredient = <div className={classes.onion}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
};

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default Ingredient;