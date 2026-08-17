// ?call back functions

// function ritom (callbac){
//     console.log('hello my name is ritom');

// }


// function priya(){
//      console.log("hi my name is priya");
//      return 30 + 50;

// }

// ritom(priya())

// ! A Higher-Order Function is a function that accepts another function as an argument or returns a function.
// ?it take a function as a argumanet
// function greet(name) {
//     console.log("Hello " + name);
// }

// function process(callback) {
//     callback("Ritom");
// }

// process(greet);

// !A First-Order Function is a normal function that does not take another function as an argument and does not return another function.

// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20));

// !creates a new array by applying a function to every element of the original array.which is map

/* Visits every element.
Changes every element.
Returns a new array.
Original array remains unchanged.

*/ 

// ?code

// arr = [2,4,6,8,9];

// const result = arr.map(n => n);
// console.log(result);


// &creates a new array containing only the elements that satisfy a condition.

// name = ['ritom','surjo','priya','radika']

// const result = name.filter( check => check.length < 6)
// console.log(result)

// & combines all elements of an array into one final value.
// const numbers = [10, 20, 30, 40];

// const sum = numbers.reduce((total, num) => {
//     return total + num;
// }, 0);

// console.log(sum);


// const students = [
//     { name: "Ritom", age: 20 },
//     { name: "Rahul", age: 21 },
//     { name: "Amit", age: 22 }
// ];

// const result = students.map( nm => nm.name)
// console.log(result)

// arr = [10,45]

// arr.push(60);
// // arr.pop();
// arr.shift();
// arr.unshift(44);
// console.log(arr);


arr = [ 3 , 4 , 5 ,6 , 7, 8];

const ch = arr.map();
if(ch % 2 == 0){
    console.log("even")
}
