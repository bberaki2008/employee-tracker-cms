const Department = require("../models/Department");
const inquirer = require("inquirer");//Create a table
const main =require("./main");
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
            //
            printTable(rows);
            })
            .then(() => {
                departmentOptions();
            });
}

function departmentOptions(){

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
            // console.log("Exiting");
            // console.log("quit");
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