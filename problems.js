// const numbers = [1, 2, 3, 4, 5];

// const resutl = numbers.map(n => n*n)
// console.log(resutl)

const students = [
    { name: "Ritom", marks: 85 },
    { name: "Rahul", marks: 40 },
    { name: "Amit", marks: 90 }
];

const r = students.filter(s => s.marks > 60)

console.log(r)