import React from "react";
import "./SCSS/LoginSignup.scss";

const LoginSignup = () => {
  return (
    <div className="login-Signup">
      <div className="login-signup-container">
        <h1>Sign UP</h1>

        <div className="login-signup-field">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
