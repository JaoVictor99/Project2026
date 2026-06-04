async function validarlogin() {

    const id = document.getElementById("identificador").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identificador: id,
            senha: senha
        })
    });

    const dados = await resposta.json();

    //console.log("Resposta:", dados);

    if (dados.sucesso) {
        window.location.href = dados.redirect;
    } else {
        alert(dados.mensagem);
    }
}