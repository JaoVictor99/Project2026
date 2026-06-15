
document.getElementById("pesquisa").addEventListener("input", function () {
    const termo = this.value.toLowerCase();
    const alunos = document.querySelectorAll(".linha-aluno");

    alunos.forEach(aluno => {
        const nome = aluno.querySelector(".aluno span").textContent.toLowerCase();
        if (nome.includes(termo)) {
            aluno.style.display = "flex";
        } else {
            aluno.style.display = "none";
        }
    });
});

async function deletarAluno(id) {
    try {
        if (!confirm("Tem certeza que deseja excluir este aluno?")) return;

        const resposta = await fetch(`http://localhost:3000/alunos/${id}`, {
            method: "DELETE"
        });

        const dados = await resposta.json();

        if (dados.sucesso) {
            alert("Aluno deletado com sucesso!");
            window.location.reload(); // atualiza a lista
        } else {
            alert(dados.mensagem);
        }
    } catch (error) {
        console.error(error);
        alert("Erro interno do servidor");
    }
}