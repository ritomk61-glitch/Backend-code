const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ritomsql@123",
    database: "ritom"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Database connected successfully");
    }
});
db.query("SELECT * FROM details", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
// app.listen(100)