//const fs = require('fs');

import fs from 'fs';


//Exemplo de codigo Nodejs

const nome = "Helton Azevedo";
console.log("Seja bem vindo", nome);




fs.writeFile('aula07.txt', 'Esse arquivo foi gerado usando Node.js', (err) => {
    if (err) throw err;
    console.log('Arquivo criado com sucesso!');
});

fs.readFile('./src/views/aula07-externo.txt', 'utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
})