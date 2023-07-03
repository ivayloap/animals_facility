import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <input type="text" placeholder="Username or email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
        <div className="login-links">
          <a href="#">Forgotten password</a>
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
