import express from  "express";
import mysql from "mysql2";


const app = express();


app.listen (8800, ()=>{console.log ( "connected to backend")}) 