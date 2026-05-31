class LoginController {

    static telaLogin(req, res) {
        res.render("login");
    }

    static async login(req, res) {

    const { identificador, senha } = req.body;

    try {

        if (identificador === "admin" && senha === "admin123") {
            return res.status(200).json({
                sucesso: true,
                redirect: "/home"
            });
        }

        return res.status(401).json({
            sucesso: false,
            mensagem: "Usuário ou senha inválidos"
        });

    } catch (erro) {
        console.error(erro);
        return res.status(500).json({
            sucesso: false,
            mensagem: "Erro interno do servidor"
        });
    }
}
}

module.exports = LoginController;