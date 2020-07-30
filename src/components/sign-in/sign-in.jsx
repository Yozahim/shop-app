import React, { useState } from "react";

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import "./sign-in.style.scss";

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({email: '', password: ''})

  const { email, password } = userCredentials
  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setCredentials({email: '', password: ''})
    }
    catch (error) {
      console.error(error)
    }

  }

  const handleChange = event => {
    const { value, name } = event.target

    setCredentials({...userCredentials, [name]: value})
  }
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={email} 
            required
            label="email"
            handleChange={handleChange}>
          </FormInput>
          <FormInput 
            name='password' 
            type='password' 
            value={password} 
            required
            label="password"
            handleChange={handleChange}>
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

export default SignIn;
