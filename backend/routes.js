// routes.js
const express = require("express");
const db = require("./db");
const session = require("express-session");
const router = express.Router();

router.use(
  session({
    secret: "1", // Replace with a secure key for session encryption
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }, // Set to true if using HTTPS
  })
);

router.post("/login", (req, res) => {
  console.log("Login route hit!");
  // Check login credentials in the database
  const { username, password } = req.body;
  console.log("Username:", username);
  console.log("Password:", password);

  const query = `SELECT * FROM user WHERE user_id = ? AND pass = ?`;

  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      if (result.length > 0) {
        // Successful login
        console.log("200");
        req.session.user = {
          id: JSON.stringify(result[0].user_id),
          username: JSON.stringify(result[0].username),
        };
        res
          .status(200)
          .json({ message: "Login successful", redirect: "/dashboard" });
      } else {
        // Invalid credentials
        console.log("401");
        res.status(401).json({ message: "Invalid username or password" });
        res.end();
      }
    }
  });
});

router.post("/register", (req, res) => {
  console.log("Register route hit!");
  // Check login credentials in the database
  const { name, email, username, pass } = req.body;
  console.log("Name:", name);
  console.log("email", email);
  console.log("Username:", username);
  console.log("Password:", pass);

  const query = `INSERT INTO user VALUES ( ?, ?, ?, ?, CURDATE())`;

  db.query(query, [username, name, email, pass], (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      // Successful login
      console.log("200");
      res
        .status(200)
        .json({ message: "Register successful", redirect: "/login" });
    }
  });
});

router.post("/dashboard", (req, res) => {
  console.log("Dashboard route hit!");
  // Check login credentials in the database
  const { username } = req.body;
  console.log("Username:", username);

  const query = `SELECT * FROM user WHERE user_id = ? `;

  db.query(query, [username], (err, result) => {
    if (err) {
      console.error("Database query error:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      if (result.length > 0) {
        console.log("200");
        res
          .status(200)
          .json({ message: "dashboard successful", redirect: "/dashboard" });
        console.log(result);
      } else {
        console.log("401");
        res.status(401).json({ message: "Invalid username" });
        res.end();
      }
    }
  });
});

router.post("/calendar", (req, res) => {
  console.log("Calendar route hit!");
  // Check login credentials in the database
  const { index } = req.body;
  console.log("index:", index);

  const query = `SELECT SUM(spent_amt) FROM expenses WHERE user_id = 'test' AND DAY(exp_date)= ? AND MONTH(exp_date)= MONTH(CURDATE())`;

  db.query(query, [index], (err, result) => {
    console.log("SQL Query Result:", result);
    if (err) {
      console.error("Database query error:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      if (result && result[0] && result[0].total !== null) {
        const totalAmount = result[0].total;
        console.log("200");
        res
          .status(200)
          .json({
            message: "Login successful",
            redirect: "/dashboard",
            amount: result[0]["SUM(spent_amt)"],
          });
      } else {
        console.log("401");
        res
          .status(401)
          .json({ message: "Invalid username or password", amount: null });
      }
    }
  });
});

router.post("/budgetplanner", (req, res) => {
  console.log("Budget route hit!");
  // Check login credentials in the database
  const { category, dueDate, amount, description } = req.body;
 
  const query = `INSERT INTO budget( due_date, user_id, expected_amt, cat_id, b_description) VALUES (?,'test', ? ,?,?)`;

  db.query(query, [dueDate, amount, category, description ], (err, result) => {
    console.log("SQL Query Result:", result);
    if (err) {
      console.error("Database query error:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
            console.log("200");
      res
        .status(200)
        .json({ message: "Update successful", redirect: "/login" });
    
    }
  });
});

router.post("/overview", (req, res) => {
  console.log("Overview route hit!");
  // Check login credentials in the database
  const { amount, description, category, paymentmode } = req.body;

  const query = `INSERT INTO expenses( user_id, exp_date, cat_id, exp_description, spent_amt, payment_mode) VALUES ('test',CURDATE(),?,?,?,?)`;

  db.query(query,[ category, description, amount, paymentmode],
    (err, result) => {
      console.log("SQL Query Result:", result);
      if (err) {
        console.error("Database query error:", err);
        res.status(500).json({ message: "Internal server error" });
      } else {
        console.log("200");
        res
          .status(200)
          .json({ message: "Update successful" });
      }
    }
  );
});



module.exports = router;
