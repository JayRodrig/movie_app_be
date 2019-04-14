DROP DATABASE IF EXISTS moviedb;
CREATE DATABASE moviedb;

\c moviedb;

CREATE TABLE genres (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL
);

CREATE TABLE movies (
	id SERIAL PRIMARY KEY,
	title VARCHAR NOT NULL,
	genre_id INT REFERENCES genres(id) 
    ON DELETE CASCADE,
	img_url VARCHAR NOT NULL
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY, 
    stars INT, 
    movie_id INT REFERENCES movies(id) ON DELETE CASCADE  
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY, 
    comment_text VARCHAR NOT NULL,
    movie_id INT REFERENCES movies(id) ON DELETE CASCADE
);

INSERT INTO genres (name) VALUES ('Comedy'),
('Action'),('Drama'),('Adventure'),('Horror');

INSERT INTO movies (title, genre_id, img_url) VALUES
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg'),
('Shrek', 1, 'https://images-na.ssl-images-amazon.com/images/I/51wEYwlLldL.jpg');

INSERT INTO ratings (stars, movie_id) VALUES
(5, 1),
(5, 2),
(5, 2),
(5, 2),
(5, 6),
(5, 6),
(5, 6),
(5, 1),
(5, 1),
(5, 1),
(5, 1);

INSERT INTO comments (comment_text, movie_id) VALUES
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1),
('Great movie!', 1);