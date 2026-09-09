
// *program no - 8-express

const express = require("express");

const app = express();


const book =[
    {
        id:1,
        name:'harry potter',
        price:345
    },

    {
        id:2,
        name:'Incredible Hulk',
        price:458
    },

    {
        id:3,
        name:'quick learner',
        price:2222
    }


];
app.get("/", (req, res) => {
  res.send("this is our home page.create using express");
});
app.get("/books", (req, res) => {
  res.send(book);
});

app.listen(2000, () => {
  "";
  console.log("your code running on port no 2000");
});
