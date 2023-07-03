import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="forgot-register-links">
        <a href="/forgot-password">Forgotten Password?</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Login;
