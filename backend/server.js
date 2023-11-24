// server.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./db'); // Assuming you have a separate file for database connection
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const port = 3000;



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
