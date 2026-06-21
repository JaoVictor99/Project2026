const inputBusca = document.getElementById("busca");
if (inputBusca) {
    inputBusca.addEventListener("input", function () {
        const termo = this.value.toLowerCase();
        const livros = document.querySelectorAll(".linha-livro");

        livros.forEach(livro => {
            const titulo = livro.querySelector(".livro span").textContent.toLowerCase();
            livro.style.display = titulo.includes(termo) ? "flex" : "none";
        });
    });
}

async function capturarLivro(){

    try{

        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const paginas = document.getElementById("quant_paginas").value;
        const nacionalidade = document.getElementById("nacionalidade").value;

        console.log({titulo, autor, paginas, nacionalidade});

        const resposta = await fetch("http://localhost:3000/cadastroLivro",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: titulo,
                autor: autor,
                paginas: paginas,
                nacionalidade: nacionalidade,
            })

            
        });


        const dados = await resposta.json();

         if (dados.sucesso) {
            alert("Livro cadastrado com sucesso!");
         
        }

    }catch(error){
        console.error(error);
        return alert("Erro interno do servidor");
    }finally{
         window.location.href = "/home"; 
    }
};

async function listarLivros() {
    try {
        const resposta = await fetch('http://localhost:3000/livro');
        const dados = await resposta.json();

        if (dados.sucesso) {
            return dados.dados; 
        } else {
            alert(dados.mensagem);
        }
    } catch (error) {
        console.error(error);
        alert("Erro interno do servidor");
    }
}

async function buscarLivro(id) {

    try{

        const resposta = await fetch(`http://localhost:3000/livro/${id}`);
        const dados = await resposta.json();

        if(dados.sucesso){
            return dados.dados
        }else{
            alert(dados.mensagem);
        }

    }catch(error){
        console.error(error);
        alert("Erro interno do servidor");
    }
    
}

async function atualizarLivro(id){
    try{

        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const paginas = document.getElementById("quant_paginas").value;
        const nacionalidade = document.getElementById("nacionalidade").value;

        const reposta = await fetch(`http://localhost:3000/livro/${id}`,{

            method: "PUT",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({titulo,autor, paginas,nacionalidade})
        });

        const dados = await reposta.json();

        if(dados.sucesso){
            alert("Livro atualizado com Sucesso");
        }else{
            alert(dados.mensagem);
        }
    }catch(error){
        console.error(error);
        alert("Erro interno do servidor");
    } finally {
        window.location.href = "/home";
    }


    
}


async function deletarLivro(id) {

    try{

        if(!confirm("Deseja Excluir esse livro ?")) return;

        const resposta = await fetch(`http://localhost:3000/livro/${id}`, {
            method: "DELETE"
        });

        const dados = await resposta.json();

        if(dados.sucesso){
            alert("Livro deletado com sucesso!");
            window.location.reload(); 
        } else {
            alert(dados.mensagem);
        }

    }catch (error) {
        console.error(error);
        alert("Erro interno do servidor");
    }
    
}