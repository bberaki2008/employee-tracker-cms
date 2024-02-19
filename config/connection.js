const mysql =require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'employeeTracker_db',
  port: 3306,
  password: 'bereket123',
},
console.log("Connected to the employeeTracker_db database.")
);

connection.addListener('error', (err) => {
  console.log(err);
});

module.exports = connection;