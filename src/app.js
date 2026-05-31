const express = require("express");
const path = require("path");
const app = express();

const db = require("./db/conn");

db.connect((err) => {
    console.log("PostgreSQL conectado!");
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

const minhaRota = require("./routes/myRoutes");

app.use(minhaRota);

module.exports = app;