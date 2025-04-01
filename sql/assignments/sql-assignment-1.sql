-- Create table 'movie'
CREATE TABLE movie
(
	id INT IDENTITY(1, 1),
	title VARCHAR(30) NOT NULL,
	director VARCHAR(30) NOT NULL,
	premiere_year INT NOT NULL,
	length_minutes INT NOT NULL,
	CONSTRAINT movie_id_pk1 PRIMARY KEY(id),
	CONSTRAINT movie_title_uk1 UNIQUE(title),
	CONSTRAINT movie_premiere_year_ck1 CHECK(premiere_year > 0),
	CONSTRAINT movie_length_minutes_ck2 CHECK(length_minutes > 0),
);

EXEC sp_help movie;

-- Create table 'box_office'
CREATE TABLE box_office
(
	movie_id INT,
	rating DECIMAL(3,1) NOT NULL,
	domestic_sales BIGINT NOT NULL,
	international_sales BIGINT NOT NULL,
	CONSTRAINT box_office_rating_ck1 CHECK(rating > 0),
	CONSTRAINT box_office_domestic_sales_ck2 CHECK(domestic_sales > 0),
	CONSTRAINT box_office_international_sales_ck3 CHECK(international_sales > 0),
	CONSTRAINT box_office_movie_id_fk1 FOREIGN KEY(movie_id) REFERENCES movie(id)
);

EXEC sp_help box_office;

-- Populate 'movie' table.
INSERT INTO movie VALUES 
('Toy Story', 'John Lasseter', 1995, 81),
('A Bug''s Life', 'John Lasseter', 1998, 95),
('Toy Story 2', 'John Lasseter', 1999, 93),
('Monsters, Inc.', 'Pete Docter', 2001, 92),
('Finding Nemo', 'Andrew Stanton', 2003, 107),
('The Incredibles', 'Brad Bird', 2004, 116),
('Cars', 'John Lasseter', 2006, 117),
('Ratatouille', 'Brad Bird', 2007, 115),
('WALL-E', 'Andrew Stanton', 2008, 104),
('Up', 'Pete Docter', 2009, 101),
('Toy Story 3', 'Lee Unkrich', 2010, 103),
('Cars 2', 'John Lasseter', 2011, 120),
('Brave', 'Brenda Chapman', 2012, 102),
('Monsters University', 'Dan Scanlon', 2013, 110);

SELECT *
FROM movie;

-- Populate 'box_office' table.
INSERT INTO box_office VALUES
(5, 8.2, 380843261, 555900000),
(14, 7.4, 268492764, 475066843),
(8, 8.0, 206445654, 417277164),
(12, 6.4, 191452396, 368400000),
(3, 7.9, 245852179, 239163000),
(6, 8.0, 261441092, 370001000),
(9, 8.5, 223808164, 297503696),
(11, 8.4, 415004880, 648167031),
(1, 8.3, 191796233, 170162503),
(7, 7.2, 244082982, 217900167),
(10, 8.3, 293004164, 438338580),
(4, 8.1, 289916256, 272900000),
(2, 7.2, 162798565, 200600000),
(13, 7.2, 237283207, 301700000);

SELECT *
FROM box_office;