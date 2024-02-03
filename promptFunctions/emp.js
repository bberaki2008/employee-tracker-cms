const Employee = require("../Employee");
const Role = require("../Role");
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
    .then(() => manageEmployee());
}

function manageEmployee(){

  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'mngEmployee',
        choices: ["Add an employee", "Update an employee's role","Exit"],
        default: "Add Department",
      },
      ]).then((res ) => {
        switch (`${res.mngEmployee}`) {
          case "Add an employee":
            addEmployee();
            break;
          case "Update an employee's role":
            updateEmployeeRole();
            break;
          case "Exit":
            mainQuestions.main();
            break;
        }
      });
}


function addEmployee() {
  const role = new Role();
  const manager = new Employee();
  role.getAll().then((roles) => {
    manager.getAll().then((mgrs) => {
      let allManagers = mgrs.map((m) => {
        return `${m.id} - ${m.first_name} ${m.last_name}`;
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
              return `${r.id} - ${r.title}`;
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
          let arrRoleId = roleId.split(" ");
          let arrManagerId = managerId.split(" ");
          const employee = new Employee(
            null,
            firstName,
            lastName,
            arrRoleId[0],
            arrManagerId[0]
          );
          employee.addEmployee();
          viewAllEmployees();
          printTable("Added employee \n");
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
              return `${emp.employeeId} - ${emp.first_name} ${emp.last_name}`;
            }),
          },
          {
            type: "list",
            name: "role",
            message: "Which role do you want to assign the selected employee?",
            choices: roles.map((res) => {
              return `${res.roleID} - ${res.title}`;
            }),
          },
        ])
        .then(({ emp, role }) => {
          let empId = emp.split(" ");
          let roleId = role.split(" ");
          let selectedEmp = new Employee(empId[0]);
          selectedEmp.getEmployeeById().then((res) => {
            sEmp = res[0];
            let employee = new Employee(
              sEmp.employeeId,
              sEmp.first_name,
              sEmp.last_name,
              roleId[0],
              sEmp.managerId
            );
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

module.exports = {
  viewAllEmployees,
  addEmployee,
  updateEmployeeRole,
};