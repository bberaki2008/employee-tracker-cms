const employeeTracker_db = require("../config/connection");

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
    constructor(employeeID, first_name, last_name, roleId, managerId){
        employeeId;
        first_name;
        last_name;
        roleId;
        managerId;
    }

    getAll() {
        const qry =`SELECT * FROM employee`;
        return employeeTracker_db
               .query(qry)
               .then(([rows]) => {
                return rows;
               });
    }

    addEmployee() {
        const qry =`INSERT INTO employee(first_name, last_name, role_id, mgr_id)
        VALUES ("${this.first_name}", "${this.last_name}", "${this.role_id}", "${this.mgr_id}")`;
        return employeeTracker_db
               .query(qry);
    }

    getEmployee() {
        const qry =`SELECT * FROM employee Where employeeID = "${this.employeeId}"`;
        return employeeTracker_db
               .query(qry);
    }

    UpdateEmployee() {
        const qry =`UPDATE employee SET role_id = ? Where employeeID = "${this.employeeId}"`;
        return employeeTracker_db
               .query(qry, `${this.employeeId}`)
               .then(([rows]) => {
                return rows;
               });

    }
}






module.exports = Employee;