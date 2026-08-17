// const fs = require("fs");

// fs.readFile("Ritom.txt",(err, data) => {
//     if (err) {
//         console.log("File not found!");
//         return;
//     }

//     console.log(data);
// });

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    fs.readFile("sharda.txt", (err, data) => {

        if (err) {
            res.write("File not found!");
            res.end();
            return;
        }

        res.write(data);
        res.end();
    });

});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});
