-- DATABASE NAME: college
USE college;


CREATE TABLE students(
    studentID        INT AUTO_INCREMENT PRIMARY KEY,
    firstName        VARCHAR(50),
    lastName         VARCHAR(50),
    email            VARCHAR(100),
    program          VARCHAR(100)
);