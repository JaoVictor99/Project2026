// Imortando o pacote Express
const express = require("express")
//Inicializando o Express
const app = express();
const port = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());




module.exports = app;



