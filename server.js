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

app.listen(3000);
