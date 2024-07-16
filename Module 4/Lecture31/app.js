const http = require("http");

const server = http.createServer((req, res) => {
  res.write("<h1>Hello from server</h1>");
  res.end();
});

server.listen(3000);
