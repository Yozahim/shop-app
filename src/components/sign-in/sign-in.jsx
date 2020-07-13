import React, { Component } from "react";

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import "./sign-in.style.scss";

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email} 
            required
            label="email"
            handleChange={this.handleChange}>
          </FormInput>
          <FormInput 
            name='password' 
            type='password' 
            value={this.state.password} 
            required
            label="password"
            handleChange={this.handleChange}>
          </FormInput>
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
      );
  }
}

export default SignIn;
