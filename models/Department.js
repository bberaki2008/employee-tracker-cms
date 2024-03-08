const connection = require("../config/connection");

//Create a table
const { printTable } = require('console-table-printer');

class Department {
    constructor(deptId, dept_name){
        this.deptId =deptId;
        this.dept_name=dept_name;
    }

    getAll() {
        const qry =`SELECT * FROM department`;
        return connection
                .promise()
                .query(qry)
                .then(([rows]) => {
                return rows;
                });
    }

    addDept() {
        const qry =`INSERT INTO department(deparmentName)
        VALUES ("${this.dept_name}")`;
        return connection
                .promise()
                .query(qry);
    }
}

module.exports = Department;