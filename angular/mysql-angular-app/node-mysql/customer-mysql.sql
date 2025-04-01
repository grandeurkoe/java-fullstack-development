CREATE DATABASE CustomerRecords;

USE CustomerRecords;

CREATE TABLE customer (
custid int, firstname varchar(45), lastname varchar(45), 
email varchar(100), cellno varchar(10)
);

/*
  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true
  To fix, execute the command below.
*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '172958';

SELECT * FROM customer;

INSERT INTO customer VALUES(1, 'Vishal', 'Kushwaha', 'connect.vishalnow@gmail.com', '9930123456');
INSERT INTO customer VALUES(2, 'Shweta', 'Kumari', 'connect.shweta@gmail.com', '9930123446');
INSERT INTO customer VALUES(3, 'Shriram', 'Kushwaha', 'connect.ram@gmail.com', '9930123433');
INSERT INTO customer VALUES(4, 'Meena', 'Devi', 'connect.meena@gmail.com', '9930123220');