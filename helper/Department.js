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

class Department {
    constructor(deptId, dept_name){
        deptId;
        dept_name;
    }

    getAll() {
        const qry =`SELECT * FROM department`;
        return employeeTracker_db
               .query(qry)
               .then(([rows]) => {
                return rows;
               });

    }

    addDept() {
        const qry =`INSERT INTO department(deparmentName)
        VALUES ("${this.dept_name}")`;
        return employeeTracker_db
               .query(qry);
    }
}

module.exports = Department;