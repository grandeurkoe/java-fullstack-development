-- Calculate column sum.
SELECT SUM(salary) AS "Sum of Salaries"
FROM employees;

-- Calculate column average.
SELECT AVG(salary) AS "Average of Salaries"
FROM employees;

-- Retrieve maximum value in a column.
SELECT MAX(salary) AS "Minimum of Salaries"
FROM employees;

-- Retrieve minimum value in a column.
SELECT MIN(salary) AS "Maximum of Salaries"
FROM employees;

-- Retrieve number of records.
SELECT COUNT(*)
FROM employees;

-- GROUP BY statement
SELECT department_id, SUM(salary) AS "Sum of Salaries", COUNT(salary) AS "Number of Employees"
FROM employees
GROUP BY department_id;

-- GROUP BY multiple columns.
SELECT department_id, job_id, SUM(salary) AS "Sum of Salaries", COUNT(*) AS "Number of Employees"
FROM employees
GROUP BY department_id, job_id;

SELECT department_id, job_id, SUM(salary) AS "Sum of Salaries", COUNT(*) AS "Number of Employees"
FROM employees
WHERE department_id IN (10, 20, 30, 50, 80)
GROUP BY department_id, job_id;

-- GROUP BY ROLLUP
-- Retrieve all combinations of (department_id, null), (department_id, job_id), Overall (NULL, NULL)
-- Rollup from left to right.
SELECT department_id, job_id, SUM(salary) AS "Sum of Salaries", COUNT(*) AS "Number of Employees"
FROM employees
GROUP BY ROLLUP(department_id, job_id);

-- GROUP BY CUBE
-- Retrieve all possible combinations, even the ones not included in ROLLUP.
SELECT department_id, job_id, SUM(salary) AS "Sum of Salaries", COUNT(*) AS "Number of Employees"
FROM employees
GROUP BY CUBE(department_id, job_id);

-- GROUPING SETS
-- Allows you to retrieve only the combinations that you want.
SELECT department_id, job_id, SUM(salary) AS "Sum of Salaries", COUNT(*) AS "Number of Employees"
FROM employees
GROUP BY GROUPING SETS((department_id, job_id), (department_id), (job_id));