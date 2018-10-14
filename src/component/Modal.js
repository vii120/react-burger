import React, { Component } from 'react';
import classes from '../styles/modal.css';
import globalClass from '../styles/global.css';
import Spinner from '../component/Spinner'

class Modal extends Component {
  /** update modal only when "modal related variables" change! */
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.showModal !== this.props.showModal
      || nextProps.modalLoading !== this.props.modalLoading
  }
  componentWillUpdate() {
    // console.log('modal update!!')
  }
  render() {
    const {
      showModal,
      modalSwitch,
      ingredients,
      totalPrice,
      confirmOrder,
      modalLoading,
    } = this.props

    let summary = ingredients.filter(item => item.number > 0)
      .map(item =>
        <tr key={item.type}>
          <td style={{ textTransform: 'capitalize' }}>{item.type}</td>
          <td>{item.number}</td>
          <td>$ {item.number * item.price}</td>
        </tr>
      );
    let modalClass = classes.modal;
    modalClass = showModal ? [modalClass, classes.show].join(' ') : modalClass;
    return (
      <React.Fragment>
        <div className={showModal ? classes.backdrop : null} onClick={modalSwitch}></div>
        <div className={modalClass}>
          {modalLoading ? <Spinner /> : null}
          <h2><i className="fas fa-shopping-cart"></i> Your Order List</h2>
          <p>A delicious burger with the following ingredients:</p>
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Number</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {summary}
            </tbody>
          </table>
          <div className={classes.totalPrice}>
            <i className="fas fa-comment-dollar"></i> Total Price：
          <i className="fas fa-dollar-sign"></i> {totalPrice}
          </div>
          <p>Continue to checkout?</p>
          <button className={[globalClass.btn, classes.cancel].join(' ')}
            onClick={modalSwitch} >
            Cancel
          </button>
          <button className={[globalClass.btn, classes.continue].join(' ')}
            onClick={modalSwitch} 
            // onClick={confirmOrder} 
            >
            Continue
          </button>
        </div>
      </React.Fragment>
    )
  }

}

export default Modal;