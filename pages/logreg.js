import React, { useState } from "react";
import image from "../img/login.png";


import'./login.css';
import  Login  from "./login.js";
import  Register  from "./register";
const Logreg = () => {
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div  style ={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
     
    </div>
  )
}

export default Logreg;
