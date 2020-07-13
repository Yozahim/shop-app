import React, { Component } from "react";

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import "./sign-up.scss";

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      passwordRepeat: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { displayName, email, password, passwordRepeat } = this.state
    if (password !== passwordRepeat) {
      alert("password don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
    
      this.setState({
        displayName: '',
        email: '',
        password: '',
        passwordRepeat: ''
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value})
  }

  render() {
    const { displayName, email, password, passwordRepeat } = this.state
    return (
      <div className='sign-up'>
        <h2>I don't have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName' 
            type='text' 
            value={displayName} 
            required
            onChange={this.handleChange}
            label="Name"></FormInput>
          <FormInput
            name='email' 
            type='email' 
            value={email} 
            required
            onChange={this.handleChange}
            label="email"></FormInput>
          <FormInput
            name='password' 
            type='password' 
            value={password} 
            required
            onChange={this.handleChange}
            label="password"></FormInput>
          <FormInput
            name='passwordRepeat' 
            type='password' 
            value={passwordRepeat} 
            required
            onChange={this.handleChange}
            label="confirm repeat"></FormInput>
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
