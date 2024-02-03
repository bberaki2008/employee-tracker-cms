const Department = require("../models/Department");
const inquirer = require("inquirer");//Create a table
const mainQuestions =require("./mainQuestions.js");
const { printTable } = require('console-table-printer');

function viewDepartments() {
  let department = new Department();
  department
            .getAll()
            .then((rows) => {
            console.log(`
  =================
  All Departments
  =================
            `);
            //print a table
            printTable(rows);
            })
            .then(() => manageDepartment());
}

function manageDepartment(){

  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'addDepartment',
        choices: ["Add Department", "Exit"],
        default: "Add Department",
      },

      ]).then((res ) => {
        switch (`${res.addDepartment}`) {
          case "Add Department":
            console.clear()
            addDepartment();
            break;
          case "Exit":
            console.clear();
            mainQuestions.main();
            break;
        }
      });
}

function addDepartment(){
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'departmentName',
        validate: (res) => {
          if (!res) {
            console.log("Please enter a department name!");
          }
          return true;
        },
      },
    ])
    .then((res) => {
      const depart= new Department(null, res.departmentName);
      depart.addDept();
      console.clear();
      viewDepartments();
      console.table("Added department \n");
    });


}



module.exports = {viewDepartments, addDepartment};