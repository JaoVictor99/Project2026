async function capturarAluno() {
    try {
        const name = document.getElementById("nome").value;
        const matricula = document.getElementById("matricula").value;
        const curso = document.getElementById("curso").value;
        const phone = document.getElementById("telefone").value;
        const date = document.getElementById("dataCadastro").value

        const resposta = await fetch("/cadastroAluno", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: name,
                matricula: matricula,
                curso: curso,
                telefone: phone,
                dataCadastro: date

            })


        });

        const sucess = await resposta.json();


        if (sucess.sucesso) {
            window.location.href = sucess.redirect;
        } else {
            alert(sucess.mensagem);
        }

    } catch (error) {
        console.error(error);
        return alert("Erro interno do servidor");
    }
};