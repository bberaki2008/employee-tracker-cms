const employeeTracker_db = require('mysql2-promise')();

// create the connection
employeeTracker_db.configure({
    "host": "127.0.0.1",
    "user": "root",
    "password": "bereket123",
    "database": "employeeTracker_db"
});

module.exports = employeeTracker_db;