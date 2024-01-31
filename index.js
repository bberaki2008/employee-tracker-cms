//imported inquirer, fs and shapes
const inquirer = require('inquirer');
//const fs = require('fs');
//const {Triangle, Rectangle, Circle, Square} = require('./assets/shapes');

//generating questions using inquirer CML application
inquirer
  .prompt([
    // {
    //   type: 'input',
    //   message: 'What are the three text characters for your logo?',
    //   name: 'logoName',
    // },
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'employeeCms',
      choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"]
    },
    //Add Department
    {
      type: 'input',
      message: 'What is name of the department?',
      name: 'departmentName',
    },
    //Add Role 1.
    //Customer Service
    {
      type: 'input',
      message: 'What is name of the role?',
      name: 'roleName',
    },
    {
      type: 'input',
      message: 'What is the salary of the role?',
      name: 'salary',
    },
    //Add service
    {
      type: 'list',
      message: 'Which department does the role belong to?',
      name: 'departmentRole',
      choices: ["Engineering", "Finance", "Legal", "Service", "Add Role", "View All Departments", "Add Department", "Quit"]
    },
    {
      type: 'input',
      message: "What is the employee's first name?",
      name: 'employeeFirstName',
    },
    {
      type: 'input',
      message: "What is the employee's last name?",
      name: 'employeeLastName',
    },
    //
    {
      type: 'list',
      message: "What is the employee's role?",
      name: 'employeeRole',
      choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer", "Customer Service"]
    },
    {
      type: 'list',
      message: "Who is the employee's manager?",
      name: 'employeeManager',
      choices: ["listOfManagers"]
    },
// what would you like to do? Update Employee Role
    {
      type: 'list',
      message: "Which employee's role do you want to update?",
      name: 'employeeListName',
      choices: ["employeeListName"]
    },
// what would you like to do? View all employee
    {
      type: 'list',
      message: "Which employee's role do you want to update?",
      name: 'employeeListName',
      choices: ["employeeListName"]
    },
// which role do you want to assign the selected employee?
    {
      type: 'list',
      message: "which role do you want to assign the selected employee?",
      name: 'employeeRole', ///check this name
      choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer", "Customer Service"]
    },

  ])
  .then((response) => {
    //checking the response and based on that it is going to generate the table
    switch (`${response.employeeRole}`){
      case 'Salesperson':
        console.log("yayay!")
        // const square =new Square(response.logoName, response.logoTextColor, response.logoBackgroundColor)
        // fs.writeFile("logo.svg", square.generateSquare(), (err)=>{
        //   if (err){ console.error(err)}
        // });
        break;
    }
  }); 
