const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home");
const adminRoutes = require("./routes/admin");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", {});
});

app.listen(3001);
