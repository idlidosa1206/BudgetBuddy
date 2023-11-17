import axios from 'axios'
import "./login.css";
import { useState } from 'react';
const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
      // Make an API call to the login endpoint
      try {
        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          // Redirect to another page on successful login
          window.location.href = "/dashboard";
        } else {
          // Handle login failure
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };



    return (
      <div className="auth-form-container">
        <h2 className="header">Login</h2>
        <form className="login-form">
          <label className="loglabel" htmlFor="email">
            username
          </label>
          <input
            className="log"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="your username"
            id="username"
            name="username"
            required
          />
          <label className="loglabel" htmlFor="password">
            password
          </label>
          <input
            className="log"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button className="sign-up" onClick={handleLogin}>
            Log In
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    );
};
export default Login;
