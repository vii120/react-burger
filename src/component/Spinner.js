import React from 'react';
import classes from '../styles/spinner.css'

const Spinner = () => (
  <React.Fragment>
    <div className={classes.outer}></div>
    <div className={classes.ldsEllipsis}>
      <div></div><div></div><div></div><div></div>
    </div>
  </React.Fragment>
)
export default Spinner;