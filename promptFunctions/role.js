const Role = require("../models/Role");
const Department = require("../models/Department");
const inquirer = require("inquirer");
const mainQuestions = require("./mainQuestions");
const { printTable } = require('console-table-printer');

function viewAllRoles() {
  const role = new Role();
  role
    .getAll()
    .then((rows) => {
      console.log(`
                ==========
                All Roles
                ==========
      `);
      printTable(rows);
    })
    .then(() => {
                  mainQuestions.main();
                });
}

function addRole() {
  const department = new Department();
  department.getAll().then((rows) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "newRoleName",
          message: "What is name of this new role?",
          validate: (name) => {
            if (!name) {
              console.log("Please enter a name for this role!");
            }
            return true;
          },
        },
        {
          type: "input",
          name: "roleSalary",
          message: "How much does this role make per year?",
          validate: (name) => {
            if (!name) {
              console.log("Please enter a yearly salary for this role!");
            }
            return true;
          },
        },
        {
          type: "list",
          name: "newRoleDpt",
          message: "What department does this role belong to?",
          choices: rows.map((d) => {
            return `${d.deptId}--${d.deparmentName}`;
          }),
        },
      ])
      .then(({ newRoleName, roleSalary, newRoleDpt }) => {
        let truncatedId = newRoleDpt.charAt()
        const role = new Role(null, newRoleName, truncatedId, roleSalary);
        role.addRole();
        viewAllRoles();
        console.table("Added role \n");
      });
  });
}

module.exports = { viewAllRoles, addRole };