async function capturarLivro(){

    try{



        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const paginas = document.getElementById("paginas").value;
        const nacionalidade = document.getElementById("nacionalidade").value;


        console.log("Dados capturados:", { titulo, autor, paginas, nacionalidade });

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

        

    }catch(error){
        console.error(error);
        return alert("Erro interno do servidor");
    }finally{

        window.location.href = "/home";
    }
};