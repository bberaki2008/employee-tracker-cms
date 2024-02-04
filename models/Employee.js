const connection = require("../config/connection");

//Create a table
const { printTable } = require('console-table-printer');

//Create a table
// const testCases = [
//   { Rank: 3, text: 'I would like some Yellow', value: 100 },
//   { Rank: 4, text: 'I hope batch update is working', value: 300 },
// ];

//print a table
//printTable(testCases);

class Employee {
    constructor(employeeID, first_name, last_name, roleId, managerID){
        this.employeeID = employeeID;
        this.first_name = first_name;
        this.last_name = last_name;
        this.roleId = roleId;
        this.managerID = managerID;
    }

    getAll() {
        const qry =`SELECT * FROM employee`;
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
        const params =[this.first_name, this.last_name, this.roleId, this.managerID];
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
        const qry =`UPDATE employee SET roleID = ? Where employeeID = "${this.employeeID}"`;
        const params = [this.roleId];
        return connection
               .promise()
               .query(qry, params)
               .then(([row]) => {
                return row;
               });
    }
}






module.exports = Employee;