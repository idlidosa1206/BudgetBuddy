import React, { useState } from "react";
import Checkbox from "../Components/checkbox.js";
import "./login.css";
import image from "../img/login.png";
const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const[username,setUsername]=useState('');
 
    const[gusername,setGusername]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="App"
      >
        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2 className="header">SIGN UP</h2>
            <p className="text">
              {" "}
              Hey buddy,its time to track and manage your expenses!!
            </p>
            <label className="loglabel" htmlFor="name">
              Full name
            </label>
            <input
              className="log"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="full Name"
              required
            />
            <label className="loglabel" htmlFor="email">
              email
            </label>
            <input
              className="log"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              required
            />
            <label className="loglabel" htmlFor="username">
              set user name
            </label>
            <input
              className="log"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              placeholder="user Name"
              required
            />
            <label className="loglabel" htmlFor="password">
              password
            </label>
            <input
              className="log"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              required
            />

            <label htmlFor="gusername" className="loglabel">
              Add guardian username(optional)
            </label>

            <input
              value={gusername}
              name="Guardian username"
              className="log"
              onChange={(e) => setGusername(e.target.value)}
              id="Guardian username"
              placeholder="guardian user Name"
            />

            <Checkbox label="I agree to terms & conditions" />
            <button type="submit" className="sign-up">
              Sign up
            </button>
          </form>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Login here.
          </button>
        </div>
      </div>
    );
}
export default Register;
