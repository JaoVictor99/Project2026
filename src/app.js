const express = require("express");
const app = express();

app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");

const myRoutes = require("./routes/myRoutes");

app.use(myRoutes);

module.exports = app;