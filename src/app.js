const express = require("express");
const app = express();

const db = require("./db/conn");

db.connect((err) => {

    if(err){
        console.log("Erro ao conectar no banco");
        console.log(err);
    } else {
        console.log("PostgreSQL conectado!");
    }
});

app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");

const myRoutes = require("./routes/myRoutes");

app.use(myRoutes);

module.exports = app;