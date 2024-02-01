const Department = require("../helper/Department");
const inquirer = require("inquirer");//Create a table
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
            console.log(row);
            })
            .then(() => {
            // cb function
            });
}