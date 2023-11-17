import { Overview } from "./overview";
import { Transaction } from "./transaction";
import React, { useState, useEffect } from "react";
import image from "../img/expenses.jpg";
import "./expense.css";



const Expense = (props) => {
  const [transaction, updateTranscation] = useState([]);
  const [expense, updateExpense] = useState([0]);
  const [income, updateIncome] = useState([0]);

  const add = (payload) => {
    const transarray = [...transaction];
    transarray.push(payload);
    updateTranscation(transarray);
  };

  const calcbalance = () => {
    let expense = 0;
    let income = 0;
    transaction.forEach((payload) => {
      payload.type === "expense"
        ? (expense = expense + payload.amount)
        : (income = income + payload.amount);
    });
    updateExpense(expense);
    updateIncome(income);
  };

  useEffect(() => calcbalance(), [transaction]);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        
        height: "115vh", // Adjust the height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="App"
    >
      <div className="cont">
        
          <Overview add={add} expense={expense} income={income}></Overview>
          
          
          <Transaction transaction={transaction}></Transaction>
        
      </div>
    </div>
  );
};

export default Expense;
