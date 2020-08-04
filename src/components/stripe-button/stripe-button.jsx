import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51H7JbUFZwFl0XH1V2KpJsf8gk8IIwC270kTAjhy6rEtvGyzcV0fcx5lE8IXhjZxFkYPltU3hN0FIFT5YknvYsrba000CnVXDos'
  
  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      name="Yoza's shop"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      label="Pay Now"
      billingAddress
      shippingAddress
      style={{marginBottom: 50}}
      image='https://sendeyo.com/up/d/f3eb2117da'
    ></StripeCheckout>
  )
}

export default StripeCheckoutButton