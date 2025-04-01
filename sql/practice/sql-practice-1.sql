-- CREATE DATABASE statement.
CREATE DATABASE StudentManagementDB;

-- USE DATABASE statement.
USE StudentManagementDB;

-- CREATE TABLE statement.
CREATE TABLE student (
 roll_no int,
 student_name varchar(25) not null,
 date_of_birth date,
 contact decimal(10),
 primary key(roll_no)
);

-- EXEC command is used to execute a stored procedure.
-- To retrieve information about a specific table, use its name as the parameter for the sp_help stored procedure. EXEC sp_help student.
EXEC sp_help student;

-- INSERT INTO statement.
INSERT INTO student (roll_no, student_name, date_of_birth, contact)
VALUES (1, 'John Doe', '2000-05-15', '1234567890');

-- INSERT Multiple Records.
INSERT INTO student (roll_no, student_name, date_of_birth, contact)
VALUES 
(2, 'Jane Smith', '1999-08-22', '0987654321'),
(3, 'Alice Johnson', '2001-03-10', '5551234567');

-- SELECT statement.
SELECT * FROM student;

-- DELETE statement.
DELETE FROM student
WHERE roll_no = 3;

-- UPDATE statement.
UPDATE student
SET contact = 132645798, date_of_birth = '1999-01-01'
WHERE roll_no = 1;