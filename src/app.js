
// Imortando o pacote Express
const express = require("express")
//Inicializando o Express
const app = express();
const port = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Rotas da aplicação

app.get('/', (req,res) => {
    console.log("Requisição tipo GET realizada na rota /");
    res.sed("<h1>Bem Vindo ao Sistem XPTO</h1>");
});


app.get('/', (req,res) => {
    console.log("Requisição do tipo get na rota /CadastroCliente");
    res.send("<h1>Cadastro Cliente</h1>")
})


app.get('/', (req,res) => {
    const termoDeBusca = req.query.termo;
    if(termoDeBusca){
        console.log("Parametro via query: " + termoDeBusca)
        res.send(`<h1> Você pesquisou por ${termoDeBusca}`);
        
    }else{
        res.send(`<h1> Você não passou o parametro de busca</h1>`);
    }
});

//Modelo errado de passar queryParam
app.get(`/login`, (req,res) => {
    const pLogin = req.query.login;
    const pSenha = req.query.senha;

    if(pLogin === 'Alex' && pSenha === '1234'){
        res.send("<h1> Bem Vindo Alex</h1>")
    }else{
        res.send("<h1> Bem Vindo Alex</h1>") 
    }

    res.send("<h1>Usuario ou senha incorretos</h1>");
});


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


app.post('/cadastroProduto', (req,res) => {
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



module.exports = app;



