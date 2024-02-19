
INSERT INTO department(deparmentName)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");


INSERT INTO role(title, deptId, salary)
VALUES ("Civil Engineer", null, "100000"),
("Electrical Engineer", null, "120000");


INSERT INTO employee(first_name, last_name, roleID, managerID)
VALUES ("John", "Daniel", 2, null),
       ("George", "Greg", 1, null);

