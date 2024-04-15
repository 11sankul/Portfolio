const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path"); // Import the path module

const app = express();
const port = 3000;

// Create connection to MySQL database
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "#@Tiger11#@",
  database: "portfolio_sankul",
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route for serving index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route for handling form submission
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO form_data (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      res.status(500).send("Error storing form data");
      throw err;
    }
    console.log("Form data stored successfully");
    res.send("Form data stored successfully");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
