class LoginController {


     async  name(params) {
        
    } login() {

    const id = document.getElementById("identificador").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identificador: id,
            senha: senha
        })
    });
}

}