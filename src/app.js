const path = require("path");
// Imortando o pacote Express
const express = require("express")
//Inicializando o Express
const app = express();
const port = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use(express.static(path.join(__dirname, "public")));


// Engine de views
app.set("view engine", "ejs");


// Caminho das views
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {

    res.render("telaLogin");

});

module.exports = app;



