import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import laaganWhite from '../Assets/laaganwhite.png';
import laaganOrange from '../Assets/laaganorange.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [isToggling, setIsToggling] = useState(false);

  const handleActionToggle = () => {
    setIsToggling(true); 
    setAction(action === "Sign Up" ? "Login" : "Sign Up");

    setTimeout(() => setIsToggling(false), 500);
  };

  return (
    <div className={`wrapper ${action === "Login" ? "login-background" : "signup-background"}`}>
      <div className="logo">
        <img src={action === "Sign Up" ? laaganWhite : laaganOrange} alt="Logo" />
      </div>

      <div className={`container ${isToggling ? (action === "Login" ? "slide-in" : "slide-out") : ""}`}>
        <div className="header">
          {action === "Login" && <div className="welcome">Welcome!</div>}
          {action === "Sign Up" && <div className="welcome">New here?</div>}
          <div className="title">{action === "Login" ? "Sign in" : "Sign up"}</div>
          <div className="subtitle">{action === "Login" ? "To access your information" : ""}</div>
        </div>

        <div className="inputs">
          <div className="input-group">
            <label>Email</label>
            <div className="input">
              <img src={email_icon} alt="Email Icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          {action === "Sign Up" && (
            <>
              <div className="input-group">
                <label>Username</label>
                <div className="input">
                  <img src={user_icon} alt="User Icon" />
                  <input type="text" placeholder="Enter your user name" />
                </div>
              </div>

              <div className="input-group">
                <label>Confirm Password</label>
                <div className="input">
                  <img src={password_icon} alt="Password Icon" />
                  <input type="password" placeholder="Confirm your Password" />
                </div>
              </div>
            </>
          )}

          <div className="input-group">
            <label>Password</label>
            <div className="input">
              <img src={password_icon} alt="Password Icon" />
              <input type="password" placeholder="Enter your Password" />
            </div>
          </div>

          {action === "Login" && (
            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="forgot-password">
                <span>Forgot password?</span>
              </div>
            </div>
          )}
        </div>

        <button className="submit">{action}</button>

        <div className="login-link" onClick={handleActionToggle}>
          {action === "Sign Up" ? (
            <>
              Already have an account? <span>Log in</span>
            </>
          ) : (
            <>
              Don't have an account? <span>Register</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
