const express = require("express");

const app = express();

app.use(express.json());

let students = [
    {id:1,name:"ritom kumar",systemid:2025834055},
    {id:2,name:"pk",systemid:2025834055},
    {id:3,name:"sony",systemid:2025834055},
    {id:4,name:"pappu",systemid:2025834055}
];


app.get('/',(req,res) =>{
    res.json(students);
});

app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("student added succesfully");
});

app.put('/students/:id', (req, res) => {
    let id = Number(req.params.id);
    let student = students.find(s => s.id === id);

    if (student) {
        student.id = req.body.id;
        student.name = req.body.name;
        student.systemid = req.body.systemid;
        res.send('Student updated successfully');
    } else {
        res.send('Student not found');
    }
});

app.delete('/student/del/:id',(req,res) =>{
    let id = Number(req.params.id);
    let student = students.find(s =>s.id === id);
    res.send("student data delete succesfully")
})




app.listen(3000,()=>{
    console.log("your code running on port no 3000")
})