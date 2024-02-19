const connection = require("../config/connection");

//Create a table
const { printTable } = require('console-table-printer');
class Role {
    constructor(roleId, title, deptId,  salary){
        this.roleId = roleId;
        this.title = title;
        this.deptId = deptId;
        this.salary = salary;
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
        const qry =`INSERT INTO role(title, deptId, salary)
        VALUES ("${this.title}","${this.deptId}", "${this.salary}")`;
        return connection
               .promise()
               .query(qry);
    }
}

module.exports = Role;