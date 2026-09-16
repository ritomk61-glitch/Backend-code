const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const books = [
    {
        id: 1,
        name: "The Alchemist",
        price: 350,
        img: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
    },
    {
        id: 2,
        name: "Atomic Habits",
        price: 450,
        img: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
    },
    {
        id: 3,
        name: "Rich Dad Poor Dad",
        price: 500,
        img: "https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg"
    },
    {
        id: 4,
        name: "The Power of Habit",
        price: 400,
        img: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg"
    }
];

app.get("/", (req, res) => {
    res.send("this is our home page.create using express");
});

app.get("/books", (req, res) => {
    res.json(books);
});

app.listen(2000, () => {
    console.log("your code running on port no 2000");
});