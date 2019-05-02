CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name TEXT NOT NULL
);

CREATE TABLE messages (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name TEXT NOT NULL,
  message_text TEXT NOT NULL,
  room_name TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

