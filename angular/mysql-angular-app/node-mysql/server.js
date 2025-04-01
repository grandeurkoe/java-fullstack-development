const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const server = express();
const cors = require('cors'); 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "172958",
    database: "customerrecords",
    port: 3306
});

// Use the CORS middleware globally
server.use(cors()); // Allow all origins by default

// Check if successfully connected to database.
db.connect(function(err) {
    if(err) {
        console.log("Can't connect to database!");
        console.log(err);
    } else {
        console.log("Successfully connected to database!");
    }
});

// Type `node server.js` on console

// Check if successfully connected to server.
// Start the server.
server.listen(8089, function(err) {
    if(err) {
        console.log("Cannot connect to the server!");
        console.log(err);
    } else {
        console.log("Successfully connected to server at port 8089!");
    }
});

// Type `node server.js` on console again.

// Get all customers from MySQL database.
server.get('/api/customer/getall', (req,res) => {
    var qr = "SELECT * FROM customer";
    db.query(qr, (error, result) => {
        if(error) {
            res.send("Error: " + error);
        } else {
            res.send({status: "OK", data: result});
        }
    });
});

server.post('/api/customer/save', (req,res) => {
    let customerData = {
        customerId: req.body.custid,
        customerFirstname: req.body.firstname,
        customerLastname: req.body.lastname,
        customerEmail: req.body.email,
        customerCellno: req.body.cellno
    };
    var qr = "INSERT INTO customer SET = ?";
    db.query(qr, customerData, (error) => {
        if(error) {
            res.send({status: false, message: "Customer creation failed!"});
            console.log(error);
        } else {
            res.send({status: true, message: "Customer created successfully!"});
        }
    });
});
