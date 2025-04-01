-- SELECT Clause.
SELECT * 
FROM employees;

-- Get annual salary for employees.
SELECT employee_id, first_name, last_name, salary * 12 
FROM employees;

-- AS Clause.
SELECT employee_id, first_name, last_name, (salary * 12) as annual_salary 
FROM employees;

-- SELECT DISTINCT Statement.
SELECT DISTINCT department_id 
FROM employees;

-- Here both job_id and department_id records together need to be distinct.
SELECT DISTINCT job_id, department_id 
FROM employees;

-- Filter records by varchar.
SELECT *
FROM employees
WHERE first_name = 'Amit';

-- Filter records by int.
SELECT *
FROM employees
WHERE salary >= 10000;

-- Filter records by date.
SELECT *
FROM employees
WHERE hire_date >= '2000-01-01';

-- Logical AND Operator.
SELECT *
FROM employees
WHERE salary >= 5000 AND salary <= 10000;

-- BETWEEN Operator - int.
SELECT *
FROM employees
WHERE salary BETWEEN 5000 AND 10000;

-- BETWEEN Operator - varchar.
SELECT *
FROM employees
WHERE last_name BETWEEN 'King' AND 'Walsh';

-- BETWEEN Operator - date.
SELECT *
FROM employees
WHERE hire_date BETWEEN '1989-01-01' AND '1989-12-31';

-- LOGICAL OR Operator.
SELECT *
FROM employees
WHERE department_id = 30 OR department_id = 50 OR department_id = 70 OR department_id = 90;

-- IN Operator.
SELECT *
FROM employees
WHERE department_id IN (30, 50, 70, 90);

-- Logical NOT Operator.
SELECT *
FROM employees
WHERE salary NOT BETWEEN 5000 AND 10000;

SELECT *
FROM employees
WHERE department_id NOT IN (30, 50, 70, 90);