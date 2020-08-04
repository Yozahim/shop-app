import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selector'
import CustomButton from "../custom-button/custom-button";
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { Translate } from 'react-redux-i18n'

import "./cart-dropdown.style.scss";

import CartItem from '../cart-item/cart-item'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className='cart-items'>
    {
      cartItems.length ?
      cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
      : <span className='empty-message'><Translate value='cartDropdown.empty'/></span>
    }
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
        }
      }
      ><Translate value='cartDropdown.checkout' className='toUpper'/>
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))