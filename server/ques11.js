
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage for practice
const students = [];

// Home route
app.get("/", (req, res) => {
    res.send("Hello! Student server is running.");
});

// Registration API
app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please fill all fields"
        });
    }

    const existingStudent = students.find(
        student => student.email === email
    );

    if (existingStudent) {
        return res.status(409).json({
            message: "Email already registered"
        });
    }

    students.push({ name, email, password });

    res.status(201).json({
        message: "Registration successful!"
    });
});

// Login API
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    const student = students.find(
        student =>
            student.email === email &&
            student.password === password
    );

    if (!student) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    res.json({
        message: "Welcome, " + student.name + "!"
    });
});

// Start server
app.listen(2000, () => {
    console.log("Server running at http://localhost:2000");
});
