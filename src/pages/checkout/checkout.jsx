import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'

import CheckoutItem from '../../components/checkout-item/checkout-item'

import { Translate } from 'react-redux-i18n'

import './checkout.style.scss'

const CheckoutPage = ({cartItems, total}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span><Translate value='checkout.product'/></span>
      </div>
      <div className='header-block'>
        <span><Translate value='checkout.description'/></span>
      </div>
      <div className='header-block'>
        <span><Translate value='checkout.quantity'/></span>
      </div>
      <div className='header-block'>
        <span><Translate value='checkout.price'/></span>
      </div>
      <div className='header-block'>
        <span><Translate value='checkout.remove'/></span>
      </div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        ) 
      )
    }
    <div className='total'>
      <span><Translate value='checkout.total'/>: ${total}</span>
    </div>
    <div className='test-warning'>
      <Translate value='checkout.cartAnnotation'/>
    </div>
    <StripeCheckoutButton price={ total }/>
  </div>
)

const mapStateToProst = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProst)(CheckoutPage)