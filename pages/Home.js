import React from 'react';
import './Home.css';
import Card from "./Card.js";

const Home =()=>{
return (
  <>
    <div className="img-wrapper">
      <img src={require("../img/home1.webp")} alt="h" className="back-img" />

      <div className="back-text">
        <h1 className="name">Online Expense Management</h1>
        <h3>Easily manage your expenses</h3>
        <a href="/register">
          <button id="signup-btn">Sign Up for Free</button>
        </a>
      </div>
    </div>

    <div className="flex-container1">
      <Card
        text1="Simple Money Tracker"
        text2="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed volutpat magn"
      />
      <Card
        text1="Painless Budgeting"
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus blandit justo id porttitor. Sed ultricies sit amet tortor id gravida. Quisque posuere arcu ut dui blandit, quis pulvinar velit consequat. Mauris in commodo augue, nec facilisis orci. Aenean euismod ex sit amet purus venenatis, ac sodales purus venenatis. Su"
      />
    </div>
    <div className="flex-container1">
      <Card
        text1="Multiple Devices"
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus blandit justo id porttitor. Sed ultricies sit amet tortor id gravida. Quisque posuere arcu ut dui blandit, quis pulvinar velit consequat. Mauris in commodo augue, nec facilisis orci. Aenean euismod ex sit amet purus venenatis, ac sodales purus venenatis. Su"
      />
      <Card
        text1="Recurring Transactions"
        text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus blandit justo id porttitor. Sed ultricies sit amet tortor id gravida. Quisque posuere arcu ut dui blandit, quis pulvinar velit consequat. Mauris in commodo augue, nec facilisis orci. Aenean euismod ex sit amet purus venenatis, ac sodales purus venenatis. Su"
      />
    </div>
  </>
);
}

export default Home;
