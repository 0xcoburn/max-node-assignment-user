const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home");
const adminRoutes = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.statusCode(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3001);
