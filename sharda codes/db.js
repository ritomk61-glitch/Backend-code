const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "oneforall@1234",
    database: "yash"
});

connection.connect((err) => {
    if (err) {
        console.log("Connection Failed");
        console.log(err);
        return;
    }

    console.log("Database Connected");
});

connection.query("SELECT * FROM test", (err, result) => {
    if (err) throw err;

    console.log(result);
});

module.exports = connection;