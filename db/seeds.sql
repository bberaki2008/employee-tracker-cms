
INSERT INTO department(deparmentName)
VALUES ("Sales"),
       ("Engineer"),
       ("Finance"),
       ("Marketing"),
       ("Management"),
       ("Legal");


INSERT INTO role(title, deptId, salary)
VALUES ('Sales Consultant', 1, 65000),
       ('Sales Representative', 1, 58000),
       ('Market Research Analyst', 2, 75000),
       ('Industrial Engineer', 2, 95000),
       ('Civil Engineer', 2, 120000),
       ('Design Engineer', 2, 95000),
       ('Sales Manager', 5, 80000),
       ('Marketing Manager', 5, 95000),
       ('Engineer Manager', 5, 150000);


INSERT INTO employee(first_name, last_name, roleID, managerID)
VALUES  ('John', 'Dode', 1, NULL),
        ('Jane', 'Colter', 2, NULL),
        ('James', 'Dallas', 3, NULL),
        ('Liam', 'Emerson', 4, 2),
        ('Noah', 'Jones', 4, 2),
        ('William', 'Jax', 5, 3),
        ('Lucas', 'Zander', 5, 3),
        ('Theodore', 'Smith', 6, 3),
        ('Mateo', 'Johnson', 6, 3),
        ('Daniel', 'Brown', 7, 3),
        ('Michael', 'Davis', 8, 1),
        ('Jack', 'Lopez', 9, 1),
        ('Lune', 'Lee', 9, 1);