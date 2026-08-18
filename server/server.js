const http = require('http');
const { uptime } = require('process');

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const server = http.createServer((req, res) => {
 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' && req.method === 'GET') {
    res.end(JSON.stringify({ message: 'Welcome to the Squarebrackets Home API!' }));
  } else if (req.url === '/status' && req.method === 'GET') {
    res.end(JSON.stringify({ status: 'healthy', uptime: process.uptime() }));
  } 
  else if(req.url === '/about' && req.method === 'GET'){
    res.end(JSON.stringify({status: "hello this is abuout page" , uptime:process.uptime()}));
  }
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});