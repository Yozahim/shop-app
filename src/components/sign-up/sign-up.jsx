import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { Translate } from 'react-redux-i18n'

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.scss";

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({displayName: '', email: '', password: '', passwordRepeat: ''})

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, passwordRepeat } = userCredentials;
    if (password !== passwordRepeat) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setCredentials({
        displayName: "",
        email: "",
        password: "",
        passwordRepeat: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({...userCredentials, [name]: value });
  };

  const { displayName, email, password, passwordRepeat } = userCredentials;
  return (
    <div className="sign-up">
      <h2><Translate value='signUp.header1'/></h2>
      <span><Translate value='signUp.subtitle'/></span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          onChange={handleChange}
          label={<Translate value='signUp.name'/>}
        ></FormInput>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
          label={<Translate value='signUp.email'/>}
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
          label={<Translate value='signUp.password'/>}
        ></FormInput>
        <FormInput
          name="passwordRepeat"
          type="password"
          value={passwordRepeat}
          required
          onChange={handleChange}
          label={<Translate value='signUp.confirmPassword'/>}
        ></FormInput>
        <CustomButton type="submit"><Translate value='signUp.signUp'/></CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
