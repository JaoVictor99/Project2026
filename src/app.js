const express = require("express");

const path = require("path");

const app = express();

app.use(express.urlencoded({ extended:true }));


app.set("view engine", "ejs");


app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


const loginRoutes = require("./routes/loginRoutes");

const homeRoutes = require("./routes/homeRoutes");

app.use(loginRoutes);

app.use(homeRoutes);

module.exports = app;