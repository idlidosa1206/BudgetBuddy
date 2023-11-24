import React, { useState } from "react";
import "./dashboard.css";

function Dashboard() {
  const [user, setUser] = useState({
    username: "Test",
    email: "test@test.com",
    user_id: 'test',
    balance: 1000,
  });

  const [action, setAction] = useState(null);
  const [amount, setAmount] = useState(0);

  const handleAction = (actionType) => {
    setAction(actionType);
  };

  const handleAmountChange = (event) => {
    setAmount(parseFloat(event.target.value));
  };

  const performAction = () => {
    if (amount <= 0) {
      alert("Invalid amount. Please enter a valid number greater than 0.");
      return;
    }

    switch (action) {
      case "addMoney":
        setUser((prevUser) => ({
          ...prevUser,
          balance: prevUser.balance + amount,
        }));
        break;
      case "withdrawMoney":
        if (amount > user.balance) {
          alert("Insufficient balance to withdraw.");
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            balance: prevUser.balance - amount,
          }));
        }
        break;
      default:
        break;
    }

    setAction(null); // Reset the action
    setAmount(0); // Reset the amount input
  };

  return (
    <div className="dashboard">
      <h1>User Account Dashboard</h1>
      <img src="./pic.png" alt="Profile Image" />

      <div className="container">
        <h2>User Information</h2>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>User_id:</strong> {user.user_id}
        </p>
        <p>
          <strong>Balance:</strong> ${user.balance}
        </p>
      </div>

      <div className="actions">
        <button onClick={() => handleAction("addMoney")}>Add Money</button>
        <button onClick={() => handleAction("withdrawMoney")}>
          Withdraw Money
        </button>
      </div>

      {action && (
        <div className="action-form">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
          <button onClick={performAction}>Confirm</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
