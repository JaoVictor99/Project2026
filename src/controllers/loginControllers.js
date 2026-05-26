class LoginController {

    static telaLogin(req, res){

        res.render("login");

    }

    static login(req, res){

        res.redirect("/home");

    }
}

module.exports = LoginController;