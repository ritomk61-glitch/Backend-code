const express = require ('express');

const app = express()

app.get("/" , (req,res)  => {
    res.send("hello this is my first time learning backend.thank you")
})

app.get("/about" , (req , res) => {
    res.send("this is about page.thank you for visiting our page")
})
app.listen(100)