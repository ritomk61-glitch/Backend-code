
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello i am ritom.");

  res.end();
});

server.listen(5000, () => {
  console.log("your program running on port no 5000");
});
