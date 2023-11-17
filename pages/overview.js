import React, { useState } from "react";
import "./expense.css";

const AddTransview = (props) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const add = () => {
    props.add({
      amount: Number(amount),
      desc,
      category,
      type,
      id: Date.now(),
    });
    props.toggleAddTnx();
  };

  return (
    <>
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="x">X</option>
        <option value="y">Y</option>
        <option value="z">Z</option>
        <option value="others">Others</option>
      </select>

      <div className="transactionType">
        <input
          type="radio"
          id="expense"
          name="type"
          value="expense"
          checked={type === "expense"}
          onChange={() => setType("expense")}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="income"
          checked={type === "income"}
          onChange={() => setType("income")}
        />
        <label htmlFor="income">Income</label>
      </div>

      <button onClick={add}>Add Transaction</button>
    </>
  );
};

export const Overview = (props) => {
  const [isAddTnx, toggleAddTnx] = useState(true);

  return (
    <>
      <div className="balance">
        Balance: <br /> Rs {props.income - props.expense}
      </div>

      <button onClick={() => toggleAddTnx(!isAddTnx)}>
        {isAddTnx ? "Cancel" : "Add"}
      </button>

      {isAddTnx && <AddTransview toggleAddTnx={toggleAddTnx} add={props.add} />}

      <div className="section expense">
        <span>Expense</span> <br /> {props.expense}
      </div>

      <div className="section income">
        <span>Income</span> <br /> {props.income}
      </div>
    </>
  );
};
