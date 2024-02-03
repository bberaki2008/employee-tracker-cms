const mysql =require('mysql2');

//try {
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



// const mysql = require('mysql2/promise');

//   const  conn = mysql.createConnection({
//     port: 3306,
//     user: 'root',
//     namedPlaceholders: true,
//     database: 'employeeTracker_db',
//     password: 'bereket123',
//   });
//   console.log('connected!');
//   const [rows, fields] = conn.query('describe role');
//   console.log(rows);

module.exports = connection;