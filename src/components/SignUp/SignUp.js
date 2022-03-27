import "./SignUp.scss";
import FormInput from "../form-input/Form-input";
import CustomButton from "../custom-button/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/Firebase";
import React, { useState } from "react";

function SignUp() {
  const [signUp, setsignUp] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setsignUp({ ...signUp, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUp.password !== signUp.confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        signUp.email,
        signUp.password
      );
      const displayName = signUp.displayName;
      await createUserProfileDocument(user, { displayName });
      setsignUp({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          value={signUp.displayName}
          onChange={handleInput}
          name="displayName"
          label="Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          value={signUp.email}
          onChange={handleInput}
          name="email"
          label="email"
          required
        />
        <FormInput
          type="password"
          value={signUp.password}
          onChange={handleInput}
          name="password"
          label="password"
          required
        />
        <FormInput
          type="password"
          value={signUp.confirmPassword}
          onChange={handleInput}
          name="confirmPassword"
          label="confirm password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
