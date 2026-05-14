const  http = require('http');


const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'texto/html; charset=utf-8');

    if(req.url === '/'){
        res.end('<html><head><title><body><h1>Seja bem Vindo ao Sistema</h1></body></title></head></html>')
    }else if(req.url === '/cliente'){
        res.end('<h2>Cadastro de Paciente</h2>')
    }else{
        res.statusCode = 404;
        res.end('<h1>Página não econtrada</h1>');
    }
});


const port = 3000;

server.listen(PORT, 'localhost', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})