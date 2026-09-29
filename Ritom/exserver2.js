const express = require("express");

const app = express();

const laptops = [
    {
        id: 1,
        brand: "Lenovo",
        model: "LOQ 15ARP9",
        processor: "AMD Ryzen 7",
        ram: "12 GB",
        storage: "512 GB SSD",
        price: 65000
    },
    {
        id: 2,
        brand: "HP",
        model: "Victus 15",
        processor: "Intel Core i5",
        ram: "16 GB",
        storage: "512 GB SSD",
        price: 62000
    },
    {
        id: 3,
        brand: "Acer",
        model: "Aspire 7",
        processor: "AMD Ryzen 5",
        ram: "16 GB",
        storage: "512 GB SSD",
        price: 58000
    },
    {
        id: 4,
        brand: "ASUS",
        model: "TUF Gaming F15",
        processor: "Intel Core i5",
        ram: "16 GB",
        storage: "1 TB SSD",
        price: 70000
    },
    {
        id: 5,
        brand: "Dell",
        model: "G15",
        processor: "Intel Core i5",
        ram: "16 GB",
        storage: "512 GB SSD",
        price: 68000
    },
    {
        id: 6,
        brand: "MSI",
        model: "Modern 15",
        processor: "AMD Ryzen 5",
        ram: "16 GB",
        storage: "512 GB SSD",
        price: 55000
    },
    {
        id: 7,
        brand: "Apple",
        model: "MacBook Air M2",
        processor: "Apple M2",
        ram: "8 GB",
        storage: "256 GB SSD",
        price: 85000
    },
    {
        id: 8,
        brand: "Acer",
        model: "Nitro V",
        processor: "Intel Core i5",
        ram: "16 GB",
        storage: "512 GB SSD",
        price: 72000
    }
];

app.get("/", (req, res) => {
    res.send("This is our home page. Created using Express");
});

app.get("/laptops", (req, res) => {
    res.json(laptops);
});

app.listen(2000, () => {
    console.log("Your code is running on port no 2000");
});