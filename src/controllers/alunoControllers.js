const pool = require('../db/conn')

class AlunoController {

    async cadastrar(req, res) {
        try {
            const { nome, matricula, curso, telefone, dataCadastro } = req.body;


            // console.log(req.body)

            const result = await pool.query(`
    INSERT INTO aluno
    (nm_aluno, matricula, curso, telefone, data_cadastro)
    VALUES
    (
        
        $1,
        $2,
        $3,
        $4,
        CURRENT_DATE 
    )
`, [nome, matricula, curso, telefone]
            );

            return res.status(200).json({
                sucesso: true
            });



        } catch (error) {

            console.error("Erro: ", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro interno do servidor"
            });
        }
    }
}

module.exports = new AlunoController();

