const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth_demo",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Sign Up
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const query = "INSERT INTO user (username,email, password) VALUES (?, ?, ?)";
  db.query(query, [name, email, password], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("User registered!");
  });
});

// Sign In
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM user WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length > 0) res.send("Login successful!");
    else res.status(401).send("Invalid credentials");
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
