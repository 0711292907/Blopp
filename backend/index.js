import express from "express";
import mysql from "mysql2";

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: "Mur@ngi02",
  database: "test",
  debug: false,
});

// Create the Express app
const app = express();

// Define your routes and middleware here
app.get("/", (req, res) => {
  res.json("Hello, this is the backend");
});

// Start the server
app.listen(8800, () => {
  console.log("Connected to the backend");
});
