
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