import mysql from 'mysql2/promise';

async function employeeTracker() {
  // create the connection
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employeeTracker_db',
    password:'bereket123'
  },
  console.log("connected to the Employee Tracker database.")
  );
}

module.exports = employeeTracker;