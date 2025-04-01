-- Find the domestic and international sales for each movie.
SELECT title, domestic_sales, international_sales
FROM movie INNER JOIN box_office
ON movie.id = box_office.movie_id;

-- Show the sales numbers for each movie that did better internationally rather than domestically.
SELECT title, domestic_sales, international_sales
FROM movie INNER JOIN box_office
ON movie.id = box_office.movie_id
WHERE international_sales > domestic_sales;

-- List all the movies by their ratings in descending order
SELECT title
FROM movie INNER JOIN box_office
ON movie.id = box_office.movie_id
ORDER BY rating DESC;

-- Create table 'building'
CREATE TABLE building
(
	building_name VARCHAR(5),
	capacity INT NOT NULL,
	CONSTRAINT building_building_name_pk1 PRIMARY KEY(building_name),
	CONSTRAINT building_capacity_ck1 CHECK(capacity > 0)
);

EXEC sp_help building;

-- Create table 'buildemp'
CREATE TABLE buildemp
(
	role VARCHAR(20) NOT NULL,
	emp_name VARCHAR(30) NOT NULL,
	buildings VARCHAR(5),
	years_employed INT,
	CONSTRAINT buildemp_building_fk1 FOREIGN KEY(buildings) REFERENCES building(building_name) ON DELETE CASCADE,
	CONSTRAINT buidemp_years_employed_ck1 CHECK(years_employed > 0)
);

EXEC sp_help buildemp;

-- Populate 'building' table.
INSERT INTO building VALUES
('1e', 24),
('1w', 32),
('2e', 16),
('2w', 20);

SELECT * 
FROM building;

-- Populate 'buildemp' table.
INSERT INTO buildemp VALUES
('Engineer', 'Becky A.', '1e', 4),
('Engineer', 'Dan B.', '1e', 2),
('Engineer', 'Sharon F.', '1e', 6),
('Engineer', 'Dan M.', '1e', 4),
('Engineer', 'Malcom S.', '1e', 1),
('Artist', 'Tylar S.', '2w', 2),
('Artist', 'Sherman D.', '2w', 8),
('Artist', 'Jakob J.', '2w', 6),
('Artist', 'Lillia A.', '2w', 7),
('Artist', 'Brandon J.', '2w', 7),
('Manager', 'Scott K.', '1e', 9),
('Manager', 'Shirlee M.', '1e', 3),
('Manager', 'Daria O.', '2w', 6);

SELECT * 
FROM buildemp;

-- Find the list of all buildings that have employees
SELECT DISTINCT building_name
FROM building INNER JOIN buildemp
ON building.building_name = buildemp.buildings;

-- Find the list of all buildings and their capacity
SELECT *
FROM building;

-- List all buildings and the distinct employee roles in each building (including empty buildings)
SELECT building_name, role
FROM building LEFT OUTER JOIN buildemp
ON building.building_name = buildemp.buildings
GROUP BY building_name, role;