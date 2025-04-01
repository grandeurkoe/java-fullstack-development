-- SQL constraints are used to specify rules for the data in a table.
-- The following constraints are commonly used in SQL:
-- NOT NULL - Ensures that a column cannot have a NULL value.
-- UNIQUE - Ensures that all values in a column are different.
-- PRIMARY KEY - A combination of a NON NULL and UNIQUE. Uniquely identifies each row in a table.
-- FOREIGN KEY - Prevents actions that would destroy links between tables FOREIGN KEY can be null.
-- CHECK - Ensures that all values in a column satisfies a specific condition.
-- DEFAULT - Sets a default value for a column if no value is specified.
-- CREATE INDEX - Used to create and retrieve data from a database very quickly.

-- Method 1
CREATE TABLE dept
(
	dept_id INT PRIMARY KEY,
	dept_name VARCHAR(20) NOT NULL,
	dept_head VARCHAR(20) NOT NULL UNIQUE,
	dept_city VARCHAR(30) DEFAULT 'Mumbai'
);

EXEC sp_help dept;

-- Check PRIMARY KEY constraint.
INSERT INTO dept
VALUES (null, 'I.T.', 'Hasan Minhaj', DEFAULT);

-- Check NOT NULL constraint.
INSERT INTO dept
VALUES (100, null, 'Hasan Minhaj', DEFAULT);

-- Populate TABLE dept
INSERT INTO dept
VALUES (100, 'I.T.', 'Hasan Minhaj', DEFAULT);

INSERT INTO dept
VALUES (101, 'H.R.', 'Adam Brooke', 'Bangalore');

-- Check UNIQUE constraint.
INSERT INTO dept
VALUES (101, 'H.R.', 'Hasan Minhaj', DEFAULT);

-- Method 2
CREATE TABLE emp
(
	id INT IDENTITY(100, 10),
	emp_name VARCHAR(20) NOT NULL,
	email VARCHAR(20),
	salary DECIMAL(10, 2),
	dept_id INT,
	CONSTRAINT emp_id_pk1 PRIMARY KEY(id),
	CONSTRAINT emp_email_uk1 UNIQUE(email),
	CONSTRAINT emp_salary_ck1 CHECK (salary >= 10000),
	CONSTRAINT emp_dept_id_fk1 FOREIGN KEY(dept_id) REFERENCES dept(dept_id) ON DELETE CASCADE
)

EXEC sp_help emp;

-- Check CHECK constraint.
INSERT INTO emp
VALUES ('Vishal K.', 'abc@gmail.com', 5000, 100);

-- Check FOREIGN KEY constraint.
INSERT INTO emp
VALUES ('Vishal K.', 'abc@gmail.com', 20000, 101);

-- Populate TABLE emp
INSERT INTO emp
VALUES ('Vishal K.', 'abc@gmail.com', 20000, 100);

-- Disable CHECK constraint
ALTER TABLE emp
NOCHECK CONSTRAINT emp_salary_ck1;

-- Verify if CHECK constraint is disabled.
INSERT INTO emp
VALUES ('Aashish M.', 'xyz@gmail.com', 5000, 100);

-- Enable CHECK constraint.
ALTER TABLE emp
CHECK CONSTRAINT emp_salary_ck1;

-- ON DELETE CASCADE constraint is used to delete the rows from the child table automatically, when the rows from the parent table are deleted.
DELETE FROM dept
WHERE dept_id = 100;

-- DROP CONSTRAINT
ALTER TABLE emp
DROP CONSTRAINT emp_salary_ck1;

-- Verify if the constraint has indeed been dropped.
INSERT INTO emp
VALUES ('Skill Will', 'mno@gmail.com', 5000, 101);

-- Can't truncate dept table because of FOREIGN KEY CONSTRAINT.
TRUNCATE TABLE dept;