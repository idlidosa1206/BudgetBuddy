import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div className="flex-container">
            <NavLink exact to="/home" activeStyle>
              Home
            </NavLink>
            <NavLink to="/expense" activeStyle>
              Expense
            </NavLink>
            <NavLink to="/calender" activeStyle>
              Calendar
            </NavLink>
          </div>
        </NavMenu>
        <img
          className="logo"
          alt="Budgetbuddy"
          src={require("../../img/bblogo.png")}
        />
        <div className="flex-container">
          <Link to="/login">
            <button id="login-btn">Login</button>
          </Link>
          <Link to="/register">
            <button id="signup-btn">Sign Up!</button>
          </Link>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
