import "./CustomButton.scss";
import React from "react";

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
