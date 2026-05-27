const express = require ('express');

const app = express()

app.get("/" , (req,res)  => {
    res.send("hello this is my first time learning backend.thank you")
})

app.get("/about" , (req , res) => {
    res.send("this is about page.thank you for visiting our page ")
})
app.get("/hii" , (req , res ) => [
    res.send("hello my name is ritom. whats apbout you.i am from bangladesh.thank you")
])
app.listen(100)