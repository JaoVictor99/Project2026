exports.telaLogin = (req, res) => {

    res.render("login");

};

exports.login = (req, res) => {

    const { login, senha } = req.body;

    if(login === "admin" && senha === "123"){

        res.send("Login correto");

    } else {

        res.send("Login inválido");

    }

};