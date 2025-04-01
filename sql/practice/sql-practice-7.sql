SELECT *
FROM employees

SELECT *
FROM departments;

-- CROSS JOIN
-- When you don't provide a condition or the condition is incorrect, then this join happens i.e., cross multiplication.
SELECT first_name, last_name, department_name
FROM employees CROSS JOIN departments;

-- EQUII/INNER JOIN
-- Get only common data between tables.
SELECT first_name, last_name, department_name
FROM employees INNER JOIN departments
ON employees.department_id = departments.department_id;

SELECT first_name, last_name, department_name, city, country_id
FROM employees INNER JOIN departments
ON employees.department_id = departments.department_id
INNER JOIN locations
ON locations.location_id = departments.location_id;

-- LEFT OUTER JOIN
-- Get matched data and unmatched data from left hand side table.
SELECT first_name, last_name, department_name
FROM employees LEFT OUTER JOIN departments
ON employees.department_id = departments.department_id;

-- RIGHT OUTER JOIN
-- Get matched data and unmatched data from right hand side table.
SELECT first_name, last_name, department_name
FROM employees RIGHT OUTER JOIN departments
ON employees.department_id = departments.department_id;

-- FULL OUTER JOIN
-- Get matched data and unmatched data from both tables.
SELECT first_name, last_name, department_name
FROM employees FULL OUTER JOIN departments
ON employees.department_id = departments.department_id;

-- SELF JOIN
-- Match data with self.
SELECT O.first_name + ' ' + O.last_name AS "officer", M.first_name AS "manager"
FROM employees O JOIN employees M
ON O.manager_id = M.employee_id;

SELECT O.first_name + ' ' + O.last_name AS "officer", M.first_name AS "manager"
FROM employees O JOIN employees M
ON O.manager_id = M.employee_id
WHERE M.first_name = 'Steven'
ORDER BY officer;