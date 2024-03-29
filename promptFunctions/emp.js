const Employee = require("../models/Employee.js");
const Role = require("../models/Role.js");
const inquirer = require("inquirer");//Create a table
const mainQuestions =require("./mainQuestions.js");
const { printTable } = require('console-table-printer');


function viewAllEmployees() {
  const emp = new Employee();
  emp
    .getAll()
    .then((rows) => {
      console.log(`
        =============
        All Employees
        =============
            `);
            //print a table
            printTable(rows);
    })
    .then(() => {
                  mainQuestions.main();            
    });
}

function addEmployee() {
  const role = new Role();
  const manager = new Employee();
  role.getAll().then((roles) => {
    manager.getAll().then((mgrs) => {
      let allManagers = mgrs.map((m) => {
        return `${m.employeeID}-${m.first_name} ${m.last_name}`;
      });
      allManagers.push("None");
      inquirer
        .prompt([
          {
            type: "input",
            name: "firstName",
            message: "Enter first name.",
            validate: (name) => {
              if (!name) {
                console.log("Please enter a first name for this employee!");
              }
              return true;
            },
          },
          {
            type: "input",
            name: "lastName",
            message: "Enter last name.",
            validate: (name) => {
              if (!name) {
                console.log("Please enter a last name for this employee!");
              }
              return true;
            },
          },
          {
            type: "list",
            name: "roleId",
            message: "What is the new employee's role?",
            choices: roles.map((r) => {
              return `${r.roleID}-${r.title}`;
            }),
          },
          {
            type: "list",
            name: "managerId",
            message: "Who is the new employee's manager?",
            choices: allManagers,
          },
        ])
        .then(({ firstName, lastName, roleId, managerId }) => {
          let arrRoleId = roleId.split("-");
          let arrManagerId = managerId.split("-");
          const employee = new Employee(
            null,
            firstName,
            lastName,
            arrRoleId[0],
            arrManagerId[0]
          );
          employee.addEmployee();
          viewAllEmployees();
          //printTable("Added employee \n");
        });
    });
  });
}


function updateEmployeeRole() {
  let role = new Role();
  role.getAll().then((roles) => {
    let employee = new Employee();
    employee.getAll().then((res) => {
      inquirer
        .prompt([
          {
            type: "list",
            name: "emp",
            message: "Which employee's role do you want to update?",
            choices: res.map((emp) => {
              return `${emp.employeeID} - ${emp.first_name} ${emp.last_name}`;
            }),
          },
          {
            type: "list",
            name: "role",
            message: "Which role do you want to assign the selected employee?",
            choices: roles.map((res) => {
              return `${res.roleID}-${res.title}`;
            }),
          },
          {
            type: "list",
            name: "managerId",
            message: "Who is the new employee's manager?",
            choices: res.map((emp) => {
              return `${emp.employeeID}-${emp.first_name} ${emp.last_name}`;
            }),
          },
        ])
        .then(({ emp, role, managerId }) => {
          let empId = emp.split(" ");
          let roleId = role.split("-");
          let managId = managerId.split("-");
          console.log(managId);
          let selectedEmp = new Employee(empId[0]);
            selectedEmp.getEmployee().then((selEmp) => {
            selEmp = selEmp[0];
            let employee = new Employee(
              selEmp[0].employeeID,
              selEmp[0].first_name,
              selEmp[0].last_name,
              roleId[0],
              managId[0],
            );
            console.log(employee);
            employee.updateEmployee().then(() => {
              console.log(`
              
              Update was successful!`);
              viewAllEmployees();
            });
          });
        });
    });
  });
}

module.exports = { viewAllEmployees, addEmployee, updateEmployeeRole };