// Your JavaScript file

import React, { useState, useEffect } from "react";
import "./expense.css";

export const TransactionCell = (props) => {
  const cellClassName = props.payload?.type === "expense" ? "expense-cell" : "income-cell";

  return (
    <div className={`cell ${cellClassName}`}>
      <span>{props.payload.desc}</span>
      <span>Rs {props.payload.amount}</span>
    </div>
  );
};

export const Transaction = (props) => {
  const [search, updateSearch] = useState("");
  const [filteredTransaction, updateTrans] = useState(props.transaction);

  const filterData = (search) => {
    if (!search || !search.trim().length) {
      updateTrans(props.transaction);
      return;
    }

    let trans = [...props.transaction];
    trans = trans.filter((payload) =>
      payload.desc.toLowerCase().includes(search.toLowerCase().trim())
    );
    updateTrans(trans);
  };

  useEffect(() => filterData(search), [search, props.transaction]);

  return (
    <>
      <h3>Transactions</h3>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          updateSearch(e.target.value);
        }}
      />
      {filteredTransaction?.length
        ? filteredTransaction.map((payload) => (
            <TransactionCell payload={payload} key={payload.id} />
          ))
        : "No transactions found"}
    </>
  );
};
