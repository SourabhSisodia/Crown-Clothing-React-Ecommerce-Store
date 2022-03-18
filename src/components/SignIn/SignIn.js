import "./SignIn.scss";
import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/Form-input";
function SignIn() {
  const [signInForm, setsignInForm] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setsignInForm({ ...signInForm, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...signInForm };
    console.log(newRecord);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="">
        <div>
          <FormInput
            type="email"
            value={signInForm.email}
            onChange={handleInput}
            name="email"
            label="email"
            required
          />
        </div>
        <div>
          <FormInput
            type="text"
            value={signInForm.password}
            onChange={handleInput}
            name="password"
            id="password"
            label="password"
            required
          />
        </div>
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;