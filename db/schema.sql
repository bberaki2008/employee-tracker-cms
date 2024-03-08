DROP DATABASE employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department(
    deptId INT AUTO_INCREMENT PRIMARY KEY,
    deparmentName VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS role;
CREATE TABLE role(
    roleID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    deptId INT,
    salary INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (deptId) REFERENCES department(deptId) ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee(
    employeeID INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roleID INT ,
    managerID INT,
    CONSTRAINT fk_role FOREIGN KEY (roleID) REFERENCES role(roleID) ON DELETE SET NULL,
    FOREIGN KEY (managerID) REFERENCES employee(employeeID) ON DELETE SET NULL
);