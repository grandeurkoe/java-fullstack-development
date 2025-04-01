-- LIKE Operator.
-- % -> Any string of zero or more characters.
-- _ -> Any single character.
-- [] -> Any single character within the specified range [a-f] or set [abcde].
-- [^] -> Any single character not within the specified range [^a-f] or set [^abcde].

-- Filter records with first_name starting with A or a.
SELECT *
FROM employees
WHERE first_name LIKE 'A%';

-- Filter records with first_name ending with A or a.
SELECT *
FROM employees
WHERE first_name LIKE '%A';

-- Filter records with first_name containing A or a.
SELECT *
FROM employees
WHERE first_name LIKE '%A%';

-- Filter records with first_name starting with A followed by three other characters.
SELECT *
FROM employees
WHERE first_name LIKE 'A___';

-- Filter records by job_id with the following constraints :- 
-- 1. First character in range 'P-Z'.
-- 2. Second character in range 'A-Z'.
-- 3. Any third character.
-- 4. Next three character being 'MAN'.
SELECT *
FROM employees
WHERE job_id LIKE '[P-Z][A-Z]_MAN';

-- Filter records by job_id with the following constraints :- 
-- 1. First character not in range 'P-Z'.
-- 2. Second character in range 'A-Z'.
-- 3. Any third character.
-- 4. Next three character being 'MAN'.
SELECT *
FROM employees
WHERE job_id LIKE '[^P-Z][A-Z]_MAN';

-- Filter records by salary(int) containing 10.
SELECT *
FROM employees
WHERE salary LIKE '%10%';

-- Filter records by salary with the following constraints :- 
-- 1. First two character being '10'.
-- 2. Next three characters being anything.
-- 3. Next three characters being '.00'.
SELECT *
FROM employees
WHERE salary LIKE '10___.00';

-- Filter records by hire_date for the year 1999.
SELECT *
FROM employees
WHERE hire_date LIKE '1999%';

-- Filter records by hire_date for all years except 1999.
SELECT *
FROM employees
WHERE hire_date NOT LIKE '1999%';

-- Filter records by hire_date for the month of March.
SELECT *
FROM employees
WHERE hire_date LIKE '____-03-__';

-- Filter records by commission_pct where commission_pct is null.
SELECT *
FROM employees
WHERE commission_pct IS NULL;

-- Filter records by commission_pct where commission_pct is not null.
SELECT *
FROM employees
WHERE commission_pct IS NOT NULL;

-- ISNULL method -> Replace expression with value.
-- If commission_pct is NULL, replace it with 0.
SELECT employee_id, (first_name + ' ' + last_name) AS full_name, salary + (salary * ISNULL(commission_pct, 0)) AS total_salary 
FROM employees;

-- COALESCE method -> Replace expression with first NON NULL value.
-- Replace column value with 0, if both commission_pct and salary are NULL.
SELECT employee_id, (first_name + ' ' + last_name) AS full_name, COALESCE(commission_pct, salary, 0) 
FROM employees;

-- ORDER BY Keyword.
-- Sort records by last_name in ascending order.
SELECT *
FROM employees
ORDER BY last_name;

-- Sort records by last_name in ascending order. If multiple records have a matching last_name, then we sort the records by first_name in ascending order.
SELECT *
FROM employees
ORDER BY last_name, first_name;

-- Sort records by salary in descending order.
SELECT *
FROM employees
ORDER BY salary DESC;

-- Sort records by new column (total_salary) in descending order.
SELECT employee_id, (first_name + ' ' + last_name) AS full_name, salary + (salary * ISNULL(commission_pct, 0)) AS total_salary 
FROM employees
ORDER BY total_salary DESC;

-- TOP Clause
-- Sort records by salary in descending order. Fetch the first 10 records.
SELECT TOP 10 *
FROM employees
ORDER BY salary DESC;

-- PERCENT Clause
-- Sort records by salary in descending order. Fetch the first 10% of the total records.
SELECT TOP 10 PERCENT *
FROM employees
ORDER BY salary DESC;

-- OFFSET and FETCH Clause
-- Use the OFFSET clause to skip records.
-- Use the FETCH clause to fetch records.
SELECT *
FROM employees
ORDER BY salary DESC
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;