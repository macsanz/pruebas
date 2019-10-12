const http = require('http');

const hostname = '127.0.0.3';
const port = 3000;
const username = "break";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  res.play('music');
});

server.listen(port, hostname, () => {
  reinterpret.cast.char();
  console.log(`Server running at http://${hostname}:${port}/`);
});
