-- String Functions

-- Retrieve character by ASCII value.
SELECT CHAR(65);
SELECT CHAR(97);

-- Retrieve a substring from string.
SELECT LEFT('DVOC', 2);
SELECT RIGHT('DVOC', 2);
SELECT SUBSTRING('DVOC COMPUTER', 5, 11);

-- Trim leading spaces.
SELECT '1' + LTRIM('     DVOC');

-- Trim trailing spaces.
SELECT RTRIM('DVOC     ') + '`S';

-- Reverse string.
SELECT REVERSE('DVOC');

-- Convert to uppercase.
SELECT UPPER('dvoc');

-- Convert to lowercase.
SELECT LOWER('DVOC');

-- Retrieve length of string.
SELECT LEN('DVOC');

---------------------------------------------------
-- Date Functions

-- Retrive current date and time.
SELECT GETDATE();

-- Retrieve day, month, year.
SELECT DAY(GETDATE());
SELECT MONTH(GETDATE());
SELECT YEAR(GETDATE());

-- Alternative way to get above.
SELECT DATEPART(DD, GETDATE());
SELECT DATEPART(MM, GETDATE());
SELECT DATEPART(YY, GETDATE());

-- Retrieve hour and minute.
SELECT DATEPART(HH, GETDATE());
SELECT DATEPART(HOUR, GETDATE());
SELECT DATEPART(MI, GETDATE());

-- Retrieve weekday.
SELECT DATEPART(WEEKDAY, GETDATE());

-- Retrieve weekday and month name.
SELECT DATENAME(WEEKDAY, GETDATE());
SELECT DATENAME(MM, GETDATE());

-- Retrieve date 10 day from now.
SELECT DATEADD(D, 10, GETDATE());

-- Retrieve date 24 hours from now.
SELECT DATEADD(HH, 24, GETDATE());

-- Retrieve date 10 days before.
SELECT DATEADD(D, -10, GETDATE());

-- Retrieve difference between two dates.
SELECT DATEDIFF(D, '2023-06-30', GETDATE());

----------------------------------------------------
-- Math Functions

-- Round to two decimal places.
SELECT ROUND(123.4567, 2);

-- Ceil decimal value.
SELECT CEILING(123.4567);

-- Floor decimal value.
SELECT FLOOR(123.4567);

-- Exponential of value.
SELECT EXP(5);

-- Compute power of a number.
SELECT POWER(2, 3);

-- Compute natural logarithm of a number.
SELECT LOG(10);

-- Compute LOG BASE 10 of a number.
SELECT LOG10(10);

-- Compute absolute value.
SELECT ABS(-5);

-- Compute degree and radian.
SELECT DEGREES(3.456);
SELECT RADIANS(55.6);

----------------------------------------------------
-- Logical Functions

-- IIF() function.
SELECT IIF(56 >= 35, 'PASS', 'FAIL');

-- CHOOSE() function.
SELECT CHOOSE(3, 'APPLE', 'MANGO', 'KIWI');