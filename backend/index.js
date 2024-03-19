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

app.use(express.json());
// Create the Express app
const app = express();

// Define your routes and middleware here
app.get("/", (req, res) => {
  res.json("Hello, this is the backend");
});

//  Get all books
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
       pool.query(q, (err, data) => {
         if (err) {
           console.log(err);
           return res.json(err);
         }
         return res.json(data);
       });
     });



// Insert a new book
app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `descr`, `cover`, `user_name`) VALUES (?)";
     const values = [
           
   req.body.title,
   req.body.descr,
   req.body.cover,
   req.body.user_name,
 
     ];
     pool.query(q, [values], (err, data) => {
        if (err) return res.send(err);
         return res.json("Post has been succesfully created");
       });
     });









// Start the server
app.listen(8800, () => {
  console.log("Connected to the backend");
});
