const connection = require("../config/connection");

//Create a table
const { printTable } = require('console-table-printer');
class Role {
    constructor(roleID, title, deptId,  salary){
        this.roleID = roleID;
        this.title = title;
        this.deptId = deptId;
        this.salary = salary;
    }

    getAll() {
        const qry =`SELECT roleID, title, department.deparmentName, salary FROM role  INNER JOIN department ON department.deptId=role.deptId;`;
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