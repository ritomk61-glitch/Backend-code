
const express = require("express");
const app = express();

app.use(express.json());

// MODEL: Employee data
let employees = [];
let nextId = 1;

// CREATE Employee
app.post("/employees", (req, res) => {
    const employee = {
        id: nextId++,
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    };

    employees.push(employee);
    res.status(201).json(employee);
});

// READ All Employees
app.get("/employees", (req, res) => {
    res.json(employees);
});

// READ Employee by ID
app.get("/employees/:id", (req, res) => {
    const employee = employees.find(
        e => e.id === Number(req.params.id)
    );

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
});

// UPDATE Employee
app.put("/employees/:id", (req, res) => {
    const employee = employees.find(
        e => e.id === Number(req.params.id)
    );

    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }

    employee.name = req.body.name;
    employee.department = req.body.department;
    employee.salary = req.body.salary;

    res.json({ message: "Employee updated successfully", employee });
});

// DELETE Employee
app.delete("/employees/:id", (req, res) => {
    const index = employees.findIndex(
        e => e.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ message: "Employee not found" });
    }

    employees.splice(index, 1);
    res.json({ message: "Employee deleted successfully" });
});

// Start Server
app.listen(2000, () => {
    console.log("Server running on port 2000");
});
