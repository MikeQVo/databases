CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  ID INTEGER PRIMARY KEY,
  Username TEXT,
  Friends INTEGER REFERENCES Users(ID)
);

CREATE TABLE Rooms (
  ID INTEGER PRIMARY KEY,
  Room_Name TEXT,
  Members_ID INTEGER REFERENCES Users(ID)
);

CREATE TABLE Messages (
  ID INTEGER PRIMARY KEY,
  Users_ID INTEGER REFERENCES Users(ID),
  Message_Text TEXT,
  Room_ID INTEGER REFERENCES Rooms(ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

