require(`dotenv`).config();

// Set up MySQL connection.
var mysql = require("mysql");

const keys = require(`./keys.js`);

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: keys.sql.pass,
//   database: "burgers_db"
// });

let connection;

if (process.env.JAWSDB_URL)
  connection = mysql.createConnection(process.env.JAWSDB_URL)
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.sql.pass,
    database: "burgers_db"
  });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
