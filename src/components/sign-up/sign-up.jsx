import React, { useState } from "react";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

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
      <h2>I don't have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          required
          onChange={handleChange}
          label="Name"
        ></FormInput>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
          label="email"
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
          label="password"
        ></FormInput>
        <FormInput
          name="passwordRepeat"
          type="password"
          value={passwordRepeat}
          required
          onChange={handleChange}
          label="confirm repeat"
        ></FormInput>
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
