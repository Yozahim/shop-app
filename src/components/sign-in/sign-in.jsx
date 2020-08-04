import React, { useState } from "react";

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { Translate } from 'react-redux-i18n'

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
      
        <h2><Translate value='signIn.header1'/></h2>
        <span><Translate value='signIn.subtitle'/></span>
        <form onSubmit={handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={email} 
            required
            label={<Translate value='signIn.email'/>}
            handleChange={handleChange}>
          </FormInput>
          <FormInput 
            name='password' 
            type='password' 
            value={password} 
            required
            label={<Translate value='signIn.password'/>}
            handleChange={handleChange}>
          </FormInput>
          <div className='buttons'>
            <CustomButton type='submit'><Translate value='signIn.signIn'/></CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              <Translate value='signIn.signInGoogle'/>
            </CustomButton>
          </div>
        </form>
      </div>
      );
  }

export default SignIn;
