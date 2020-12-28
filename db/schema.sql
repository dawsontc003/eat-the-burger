DROP DATABASE IF EXISTS burgersDB;

CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY (id)
);



INSERT INTO burgers (burger_name, devoured)
VALUES ("Double Cheese Burger", false),("Bacon Burger", true);


SELECT * FROM burgers;