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

class Role {
    constructor(roleId, title,  salary, deptId){
        this.roleId = roleId;
        this.title = title;
        this.salary = salary;
        this.deptId = deptId;
    }

    getAll() {
        const qry =`SELECT * FROM role`;
        return connection
               .promise()
               .query(qry)
               .then(([rows]) => {
                return rows;
               });

    }

    addRole() {
        const qry =`INSERT INTO role(title, salary, deptId)
        VALUES ("${this.title}", "${this.salary}","${this.deptId}")`;
        return connection
               .promise()
               .query(qry);
    }
}

module.exports = Role;