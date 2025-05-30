var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '172958',
    database: 'studentrecords',
    port: '3306'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
    // // CREATE TABLE
    // var createQuery = "CREATE TABLE student (studid int PRIMARY KEY, name VARCHAR(50), email VARCHAR(100), cellno VARCHAR(11))";

    // con.query(createQuery, (err, result) => {
    //     if (err) throw err;
    //     console.log("Table created!");
    // });

    // // INSERT RECORDS
    // var insertQuery = "INSERT INTO student VALUES(101, 'Vishal Kushwaha', 'connect.vishalnow@gmail.com', '9769455170')";

    // con.query(insertQuery, (err, result) => {
    //     if (err) throw err;
    //     console.log("1 record inserted!");
    // });

    // // INSERT MULTIPLE RECORDS
    // var multiInsertQuery = "INSERT INTO student VALUES ?";
    // var values = [
    //     [102, "Ram Singh", 'connect.ram@gmail.com', '9876543210'],
    //     [103, "Shubh Singh", 'connect.shubh@gmail.com', '9125543210'],
    //     [104, "King Singh", 'connect.king@gmail.com', '9832143210']
    // ];

    // con.query(multiInsertQuery, [values], (err, result) => {
    //     if (err) throw err;
    //     console.log("Number of records inserted: " + result.affectedRows);
    // });

    // // SELECT QUERY
    // var selectQuery = "SELECT * FROM student";
    // con.query(selectQuery, (err, result, fields) => {
    //     if (err) throw err;
    //     console.log(result);
    // });

    // // DELETE RECORDS
    // var deleteQuery = "DELETE FROM student WHERE studid=103";
    // con.query(deleteQuery, (err, result) => {
    //     if (err) throw err;
    //     console.log("Number of records deleted: " + result.affectedRows);
    // });

    // UPDATE RECORD
    var updateQuery = "UPDATE student SET name = 'Juhi Prabhu' , email = 'connect.juhi@gmail.com', cellno = '9869869861' WHERE studid=102";
    con.query(updateQuery, (err, result) => {
        if (err) throw err;
        console.log("Number of records updated: " + result.affectedRows);
    });
});

