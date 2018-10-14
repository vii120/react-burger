import React from 'react';
import classes from '../styles/controller.css';
import globalClass from '../styles/global.css';

const Controller = (props) => {
  const {
    label,
    price,
    number,
    addIngrd,
    removeIngrd,
    disabled
  } = props
  return (
    <div className={classes.controller}>
    <div className={classes.label}>{label}</div>
    <div className={classes.priceTag}>$ {price}</div>
    <button className={[globalClass.btn, classes.less].join(' ')}
      onClick={removeIngrd}
      disabled={disabled} >
      <span className={classes.btnText}>Less</span>
      <span className={classes.btnIcon}><i className="fas fa-minus"></i></span>
    </button>
    <div className={classes.numBox}>{number}</div>
    <button className={[globalClass.btn, classes.more].join(' ')}
      onClick={addIngrd} >
      <span className={classes.btnText}>More</span>
      <span className={classes.btnIcon}><i className="fas fa-plus"></i></span>
    </button>
  </div>
  )
}

export default Controller;