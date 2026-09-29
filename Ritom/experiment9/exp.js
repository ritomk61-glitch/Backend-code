import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home page");
});

app.post("/register", (req, res) => {

    console.log(req.body);

    res.send("Registration successful");

});

app.listen(3000, (err) => {

    if (err) {
        console.log("not connected");
    } else {
        console.log("connected");
    }

});