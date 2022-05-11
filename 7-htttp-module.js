const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to Jack Javi LIMITED");
  }
  if (req.url === "/about") {
    res.end("call 07009900000");
  }
  res.end(`<h1>404 RESOURCE NOT FOUND<//h1> `);
});

server.listen(5000);
