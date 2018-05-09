<<<<<<< HEAD
var mysql = require("mysql");

var connection = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: ""
});

connection.connect(function(err) {
 if (err) {
   console.error("error connecting: " + err.stack);
   return;
 }
 console.log("connected as id " + connection.threadId);
});

module.exports = connection;
=======
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_library", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
>>>>>>> 3c400904662923d57a182a7ae4ef7290829624c7
