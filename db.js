const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ritomsql@123",
    database: "teacher"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
        return;
    }

    console.log("Database connected successfullcly");
});

module.exports = db;