import React, { Component } from "react";

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import "./sign-up.scss";

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordRepeat: ''
    }
  }
  render() {
    return (
      <div className='sign-up'>
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form>
          <FormInput
            name='email' 
            type='email' 
            value={this.state.email} 
            required
            label="email"></FormInput>
          <FormInput
            name='password' 
            type='password' 
            value={this.state.password} 
            required
            label="password"></FormInput>
          <FormInput
            name='passwordRepeat' 
            type='password' 
            value={this.state.password} 
            required
            label="password repeat"></FormInput>
          <FormInput></FormInput>
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
