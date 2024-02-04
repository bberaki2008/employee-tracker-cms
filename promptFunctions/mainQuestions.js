//imported inquirer
const inquirer = require('inquirer');
const {viewDepartments, addDepartment} = require("./dept");
const { viewAllRoles, addRole  } = require("./role");
const { viewAllEmployees, addEmployee, updateEmployeeRole } = require("./emp");
//generating questions using inquirer CML application
function main(){
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'employeeCms',
      choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
      default: "View All Employees",
    },
  //     //Add Department
  //     {
  //       type: 'input',
  //       message: 'What is name of the department?',
  //       name: 'departmentName',
  //     },
  //     //Add Role 1.
  //     //Customer Service
  //     {
  //       type: 'input',
  //       message: 'What is name of the role?',
  //       name: 'roleName',
  //     },
  //     {
  //       type: 'input',
  //       message: 'What is the salary of the role?',
  //       name: 'salary',
  //     },
  //     //Add service
  //     {
  //       type: 'list',
  //       message: 'Which department does the role belong to?',
  //       name: 'departmentRole',
  //       choices: ["Engineering", "Finance", "Legal", "Service", "Add Role", "View All Departments", "Add Department", "Quit"]
  //     },
  //     {
  //       type: 'input',
  //       message: "What is the employee's first name?",
  //       name: 'employeeFirstName',
  //     },
  //     {
  //       type: 'input',
  //       message: "What is the employee's last name?",
  //       name: 'employeeLastName',
  //     },
  //     //
  //     {
  //       type: 'list',
  //       message: "What is the employee's role?",
  //       name: 'employeeRole',
  //       choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer", "Customer Service"]
  //     },
  //     {
  //       type: 'list',
  //       message: "Who is the employee's manager?",
  //       name: 'employeeManager',
  //       choices: ["listOfManagers"]
  //     },
  // // what would you like to do? Update Employee Role
  //     {
  //       type: 'list',
  //       message: "Which employee's role do you want to update?",
  //       name: 'employeeListName',
  //       choices: ["employeeListName"]
  //     },
  // // what would you like to do? View all employee
  //     {
  //       type: 'list',
  //       message: "Which employee's role do you want to update?",
  //       name: 'employeeListName',
  //       choices: ["employeeListName"]
  //     },
  // // which role do you want to assign the selected employee?
  //     {
  //       type: 'list',
  //       message: "which role do you want to assign the selected employee?",
  //       name: 'employeeRole', ///check this name
  //       choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer", "Customer Service"]
  //     },

  ])
  .then((res ) => {
      switch (`${res.employeeCms}`) {
        case "View All Departments":
          //console.clear();
          viewDepartments();
          break;
        case "Add Department":
          //console.clear();
          addDepartment();
          break;
        case "View All Roles":
          //console.clear();
          viewAllRoles();
          break;
        case "Add Role":
          //console.clear();
          addRole();
          break;
        case "View All Employees":
          //console.clear();
          viewAllEmployees();
          break;
        case "Add Employee":
          //console.clear();
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Quit":
          //console.clear();
          console.log("use ctrl + c to Exit or shutdown");
          console.log("use 'npm start' to reboot");
          break;
      }
  }); 
}

exports.main =main;