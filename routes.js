const fs = require("fs");

const reqListener = (req, res) => {
  const url = req.url;
  const method = req.method;
  const headers = req.headers;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>YOO</title></head>");
    res.write(
      "<body><h1>Hello Matt you're the badest mother fucker alive</h1>"
    );
    res.write("<label for='user'>Add User</label>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' id='user' name='user'><button type='submit'>Submit</button></form>"
    );
    res.write("</body>");
    res.write("<html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Hell YA</title></head>");
    res.write("<body><h1>Users</h1><ul>");
    res.write("<li>Liliva</li><li>Alana</li><li>Matt</li>");
    res.write("</ul></body>");
    res.write("<html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFile("user.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = reqListener;
