--DROP DATABASE IF EXISTS employeeTracker_db;
--DROP TABLE IF EXISTS employee_roles;
--DROP TABLE IF EXISTS employee_list;
--Create a database named "employeeTracker_db"
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

--Create a table named department
CREATE TABLE department(
    ID INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE role(
    roleID INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    ID int NOT NULL,
    FOREIGN KEY (ID) REFERENCES department(ID)
);

CREATE TABLE employee(
    employeeID INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roleID int NOT NULL,
    FOREIGN KEY (roleID) REFERENCES role(roleID),
    title VARCHAR(30) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR(30) NOT NULL
);