class HomeController {

    static home(req, res){

        const alunos = [

            {
                id:1,
                nome:"Carlos Roberto da Silva",
                status:"atencao"
            },

            {
                id:2,
                nome:"Aline Silverio da Rocha",
                status:"disponivel"
            },

            {
                id:3,
                nome:"Marcinho Pereira Santos",
                status:"atrasado"
            }

        ];

        res.render("home", { alunos });

    }

}

module.exports = HomeController;