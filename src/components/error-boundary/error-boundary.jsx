import React, { Component } from 'react'

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.style'

class ErrorBoundary extends Component {
  constructor() {
    super()

    this.state = {
      hasErrored: false
    }
  }
  
  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/WvEu0cO.png'/>
          <ErrorImageText>This Page is Burnt to a Crisp</ErrorImageText>
          <span>Toast takes so long to make. You stare at the toaster tapping your feet. Your laundry is in the dryer and it just dinged. Maybe you’ll take it out. After all, you have time. You take out your laundry. You fold your underwear. You think about folding your socks. You remember your toast! It is too late. It’s burnt to a crisp. The process repeats itself. You should probably figure out your toasting settings.</span>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary