async function capturarAluno() {
    try {
        const nome = document.getElementById("nome").value;
        const matricula = document.getElementById("matricula").value;
        const curso = document.getElementById("curso").value;
        const telefone = document.getElementById("telefone").value;
        //const date = document.getElementById("dataCadastro").value;

        const resposta = await fetch("http://localhost:3000/cadastroAluno", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                matricula: matricula,
                curso: curso,
                telefone: telefone,
                //dataCadastro: date

            })
        });

        const dados = await resposta.json();

        if (dados.sucesso) {
            alert("Aluno cadastrado com sucesso!");

         
        }

    } catch (error) {
        console.error(error);
        return alert("Erro interno do servidor");
    }finally{

        window.location.href = "/home";
    }
};





async function buscarAluno(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/alunos/${id}`);
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
};


async function atualizarAluno(id) {
    try {
        const nome = document.getElementById("nome").value;
        const matricula = document.getElementById("matricula").value;
        const curso = document.getElementById("curso").value;
        const telefone = document.getElementById("telefone").value;

        const resposta = await fetch(`http://localhost:3000/alunos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, matricula, curso, telefone })
        });

        const dados = await resposta.json();

        if (dados.sucesso) {
            alert("Aluno atualizado com sucesso!");
        } else {
            alert(dados.mensagem);
        }
    } catch (error) {
        console.error(error);
        alert("Erro interno do servidor");
    } finally {
        window.location.href = "/home";
    }
}