const express = require('express');
const bodyParser = require('body-parser'); // You can use express.json() too.
const mysql = require('mysql');
const cors = require('cors'); 

const server = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "172958",
    database: "customerrecords",
    port: 3306
});

// Use the CORS middleware globally
server.use(cors({
    origin: 'http://localhost:4200',  // Allow requests only from Angular frontend
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type']
  }));

// Parse incoming request bodies (for JSON)
server.use(express.json());  // This is a built-in middleware for parsing JSON

server.use(bodyParser.json());

// Check if successfully connected to the database.
db.connect(function(err) {
    if (err) {
        console.log("Can't connect to the database!");
        console.log(err);
    } else {
        console.log("Successfully connected to database!");
    }
});

// Start the server.
server.listen(8089, function(err) {
    if (err) {
        console.log("Cannot connect to the server!");
        console.log(err);
    } else {
        console.log("Successfully connected to server at port 8089!");
    }
});

// Get all customers from MySQL database.
server.get('/api/customer/getall', (req, res) => {
    var qr = "SELECT * FROM customer";
    db.query(qr, (error, result) => {
        if (error) {
            res.send("Error: " + error);
        } else {
            res.send({ status: "OK", data: result });
        }
    });
});

// Save customer data to MySQL database.
server.post('/api/customer/save', (req, res) => {
    let customerData = {
        custid: req.body.custid,   // Assuming custid is an integer
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        cellno: req.body.cellno
    };

    // Correct INSERT query with column names and placeholders
    var qr = "INSERT INTO customer (custid, firstname, lastname, email, cellno) VALUES (?, ?, ?, ?, ?)";
    db.query(qr, [customerData.custid, customerData.firstname, customerData.lastname, customerData.email, customerData.cellno], (error) => {
        if (error) {
            res.status(500).send({ status: false, message: "Customer creation failed!" });
            console.log(error);
        } else {
            res.status(200).send({ status: true, message: "Customer created successfully!" });
        }
    });
});

// Delete customer data from MySQL database.
server.delete("/api/customer/delete/:id", (req, res) => {
    const customerId = req.params.id;  // Get the customer ID from the URL parameter

    // Use parameterized query to avoid SQL injection
    var delqr = "DELETE FROM customer WHERE custid = ?";
    
    db.query(delqr, [customerId], (err, result) => {
        if (err) {
            res.status(500).send({ status: false, message: "Customer deletion failed!" });
            console.log(err);
        } else {
            // Check if a row was affected (customer was deleted)
            if (result.affectedRows > 0) {
                res.status(200).send({ status: true, message: "Customer deleted successfully!" });
            } else {
                res.status(404).send({ status: false, message: "Customer not found!" });
            }
        }
    });
});
