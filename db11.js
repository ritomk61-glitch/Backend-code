const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/details", (req, res) => {
    db.query("SELECT * FROM details", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});