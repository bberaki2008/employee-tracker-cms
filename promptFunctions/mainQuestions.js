//imported inquirer
const inquirer = require('inquirer');
const {viewDepartments, addDepartment} = require("./dept");
const { viewAllRoles, addRole  } = require("./role");
const { viewAllEmployees, addEmployee, updateEmployeeRole } = require("./emp");


console.log(`
 __________________________________________________________________
|    ______                  __                                    |          
|   | _____|________  _ __  |  |  ____   __    __  _____  _____    |  
|   |   _| |  _   _ \\|  _  \\|  |/  __  \\|  |  |  |/  _  \\/  _  \\   |
|   |  |___| | | | | | |_|  |  |  |__|  |  |__|  |   ___/   ___/   |
|   |______|_| |_| |_| .___/|__|\\______/ \\___,   |\\_____|\\_____|   |
|                    |_|                 |______/                  |
|   __  __                                                         |
|  |  \\/  | ___ __ __ ___    ___ _  ___ __   ___   _ ___           |
|  | |\\/| |/  _'  |  '__ \\ /   _' |/  __'  |/  _ \\  '__|           |
|  | |  | |  |_|  |  |  |  |  |_| |  |__|  |   __/  |              |
|  |_|  |_|\\___,__|__|  |__|\____,_|\\____,  |\\____|__|              |
|                                  |______/                        |
|                                                                  |
|__________________________________________________________________|

`);
//generating questions using inquirer CML application
function main(){
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'employeeCms',
      choices: ["View All Employees", "Add An Employee", "Update An Employee Role", "View All Roles", "Add A Role", "View All Departments", "Add A Department", "Quit"],
      default: "View All Employees",
    },
  ])
  .then((res ) => {
      switch (`${res.employeeCms}`) {
        case "View All Departments":
          viewDepartments();
          break;
        case "Add A Department":
          addDepartment();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add A Role":
          addRole();
          break;
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add An Employee":
          addEmployee();
          break;
        case "Update An Employee Role":
          updateEmployeeRole();
          break;
        case "Quit":
          process.exit(0);
      }
  }); 
}

exports.main =main;