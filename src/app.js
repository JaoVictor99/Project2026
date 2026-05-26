const express = require("express");
const path = require("path");

const app = express();


app.use(express.urlencoded({ extended:true }));


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));


const loginRoutes = require("./routes/loginRoutes");
const homeRoutes = require("./routes/homeRoutes");

app.use(loginRoutes);
app.use(homeRoutes);


app.listen(3000, () => {

    console.log("Servidor rodando");

});


