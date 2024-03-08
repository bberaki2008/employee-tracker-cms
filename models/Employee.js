const connection = require("../config/connection");

//Create a table
const { printTable } = require('console-table-printer');

class Employee {
    constructor(employeeID, first_name, last_name, roleID, managerID){
        this.employeeID = employeeID;
        this.first_name = first_name;
        this.last_name = last_name;
        this.roleID = roleID;
        this.managerID = managerID;
    }

    getAll() {
        const qry =`SELECT employee.employeeID, employee.first_name, employee.last_name, role.title, role.salary, department.deparmentName, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.roleID = role.roleID LEFT JOIN department ON role.deptId = department.deptId LEFT JOIN employee manager ON employee.managerID =manager.employeeID ;`;
        return connection
               .promise()
               .query(qry)
               .then(([row]) => {
                return row;
               });
    }

    addEmployee() {
        const qry =`INSERT INTO employee(first_name, last_name, roleID, managerID)
        VALUES (?,?,?,?)`;
        const params =[this.first_name, this.last_name, this.roleID, this.managerID];
        return connection
               .promise()
               .query(qry, params);
    }

    getEmployee() {
        const qry =`SELECT * FROM employee Where employeeID = "${this.employeeID}"`;
        return connection
               .promise()               
               .query(qry);
    }

    updateEmployee() {
        const qry =`UPDATE employee SET roleID = ?, managerID =? Where employeeID = "${this.employeeID}"`;
        const params = [this.roleID, this.managerID];
        return connection
               .promise()
               .query(qry, params)
               .then(([row]) => {
                return row;
               });
    }
}






module.exports = Employee;