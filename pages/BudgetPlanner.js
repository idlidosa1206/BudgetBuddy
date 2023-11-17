// src/BudgetPlanner.js
import React, { useState } from 'react';
import './BudgetPlanner.css'; // Import custom styles

const BudgetPlanner = () => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAddBudgetItem = () => {
    if (category && dueDate && amount && description) {
      setBudgetItems([...budgetItems, { category, dueDate, amount, description }]);
      setCategory('');
      setDueDate('');
      setAmount('');
      setDescription('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="budget-planner-container">
      <div class="heading"><h1><center>BUDGET PLANNER</center></h1></div>
      <center>
      <div className="budget-form">
        <label>Category: </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Household bills">Household bills</option>
          <option value="Living costs">Living costs</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Leisure">Leisure</option>
          <option value="Education">Education</option>
          <option value="Others">Others</option>
        </select>
        <br/>
        <br/>

        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <br/>
        <br/>

        <label>Amount Expected:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br/>
        <br/>

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br/>
        <br/>
        <button onClick={handleAddBudgetItem}>Add Budget Item</button>
      </div>
      </center>

      <div className="budget-list">
        <h2>Budget Items:</h2>
        <ul>
          {budgetItems.map((item, index) => (
            <li key={index}>
              <strong>Category: </strong> {item.category},<br/> <strong>Due Date:</strong>{' '}
              {item.dueDate},<br/> <strong>Amount Expected:</strong> {item.amount},<br/>{' '}
              <strong>Description:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetPlanner;
