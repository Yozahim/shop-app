import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

import CheckoutItem from '../../components/checkout-item/checkout-item'

import './checkout.style.scss'

const CheckoutPage = ({cartItems, total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        ) 
      )
    }
    <div className='total'>
      <span>Total: ${total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br/> 4242 4242 4242 4242 - Exp: 01/21 CVV: any
    </div>
    <StripeCheckoutButton price={ total }/>
  </div>
)

const mapStateToProst = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProst)(CheckoutPage)