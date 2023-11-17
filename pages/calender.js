import React from "react";
import "./calendar.css";

const Calendar = () => {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <>
      <center className="header">
        <strong>Savings Tracker</strong>
      </center>

      <div className="month-layout">
        <div className="days">
          {Array.from({ length: 31 }, (_, index) => (
            <div className="day" key={index + 1}>
              <p>{index + 1}st</p>
              <button className="button" onClick={handleClick}>
                View Expenses
              </button>
              <br />
              <button className="button1">Add Expenses</button>
            </div>
          ))}
          <div className="day">
            <p>Total</p>
            <button className="button" onClick={handleClick}>
              View Expenses
            </button>
            <br />
            <button className="button1">Add Expenses</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
