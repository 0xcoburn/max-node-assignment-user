const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const headers = req.headers;

  if (url === "/") {
    res.write("Hello Matt you're the badest mother fucker alive");
    res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Hell YA</title></head>");
    res.write("<body><h1>Users</h1><ul>");
    res.write("<li>Liliva</li><li>Alana</li><li>Matt</li>");
    res.write("</ul></body>");
    res.write("<html>");
    res.end();
  }
});

server.listen(3000);
