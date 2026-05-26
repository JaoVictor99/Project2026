const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/homeControllers");
const LoginController = require("../controllers/loginControllers");

router.get("/home", HomeController.home);

router.get("/login", LoginController.login);




module.exports = router;


/*
// NOVO METODO HTTP
app.post('/recebeform', (req,res) =>{
    const dados = req.body;
    console.log("Dados vindo do formulario: ", dados)
    res.send("Dados enviados!");
});


app.post('/login', (req,res) => {
    const {login,senha} = req.body
    console.log(`Login: ${login}, Senha ${Senha}`);
    if(login ==='alex' && senha === '1234'){
        res.status(200).send("<h1> Bem vindo ao sistema</h1>")
    }else{
        res.status(401).sed("<h1> Login ou senha Incorretos </h1>");
    }
});


app.post('/cadastroLivro', (req,res) => {
    const {codigo, nome, preco} = req.body;

    if(codigo && nome && preco){
        res.status(202).send(`<h1>Produto Inserido!</h1> <p> ${codigo}, ${nome}, ${preco}</p>`)
    }else{
        res.status(400).send("<h1> Voce não informou alguns dos 3 parametros</h1>");
    }

})


    app.put("/editaonibus", (req,res) => {
        const {numro,linha,lugares} = req.body
        if(numero && linha && lugares){
            res.status(200).send(`<h1> Busão Alterado</h1> <p> ${numero}, ${linha}, ${lugares}</p>`)
        }else{
            res.status(400).send("<h1>Faltou algum parametro</h1>");
        }
    })


    app.delete("/deletaluno", (req,res) =>{

    })
        */