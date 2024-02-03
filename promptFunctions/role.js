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
    .then(() => manageRole());
}

function manageRole() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "mngRole",
        message: "What would you like to do?",
        choices: ["Add Role", "Exit Role"],
      },
    ])
    .then((res) => {
      switch (`${res.mngRole}`) {
        case "Add role":
          //console.clear();
          addRole();
          break;
        case "Exit Role":
          //console.clear();
          mainQuestions.main();
          break;
      }
    });
}

function addRole() {
  const department = new Department();
  department.getAll().then((rows) => {

 //       message: 'Which department does the role belong to?',
  //       name: 'departmentRole',
  //       choices: ["Engineering", "Finance", "Legal", "Service", "Add Role", "View All Departments", "Add Department", "Quit"]  

    //       type: 'input',
  //       message: 'What is name of the role?',
  //       name: 'roleName',
    inquirer
      .prompt([
        {
          type: "input",
          name: "newRoleName",
          message: "What is name of this new role?",
          validate: (rolename) => {
            if (!rolename) {
              console.log("Please enter a name for this role!");
            }
            return true;
          },
        },
        {
          type: "input",
          name: "roleSalary",
          message: "How much does this role make per year?",
          validate: (salary) => {
            if (!salary) {
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
        const role = new Role(null, newRoleName, roleSalary, truncatedId);
        role.addRole();
        //console.clear();
        viewAllRoles();
        console.table("Added role \n");
      });
  });
}

module.exports = { viewAllRoles, addRole };