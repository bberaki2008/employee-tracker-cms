
INSERT INTO department(deparmentName)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");


INSERT INTO role(title, salary, deptId)
VALUES ("Engineering", "100000", 1),
("Engineering1", "120000", 2);


INSERT INTO employee (first_name, last_name, roleID, managerID)
VALUES ("Bereket", "Beraki", 2, NULL),
       ("Bereket1", "Beraki1", 3, 3);

