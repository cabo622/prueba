CREATE DATABASE proyecto;

USE proyecto;


CREATE TABLE news (
  id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100),
  news TEXT,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO news (title, news) values ('Primera', 'Noticia');

SELECT * FROM news;
