const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "loginsystem",
});

app.post('/signup', (req, res) => {

    // const {firstName, lastName, email, password } = req.body;

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?)",
        [firstName, lastName, email, password], 
        (err, result) => {
            console.log(err)
        }
    );
});

app.post('/login', (req, res) => {

    const { email, password } = req.body; 
    
    /* const email = req.body.email;
    const password = req.body.password; */

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password], 
        (err, result) => {
            if (err) {
                res.send({error: err})
            } 
            
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({message: "Incorrect username or password"});
            } 
        }
    );
});

app.listen(3001, () => {
    console.log("server running on port 3001...")
});