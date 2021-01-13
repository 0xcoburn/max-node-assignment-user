const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home");
const adminData = require("./routes/admin");
const errorController = require("./controller/errorController");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(homeRoutes);

app.use(errorController.get404Error);

app.listen(3001);
