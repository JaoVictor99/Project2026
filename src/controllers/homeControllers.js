const pool = require('../db/conn');

class HomeController {

    async buscarAlunos(req, res) {
        try {
            const result = await pool.query(`
    SELECT
                id_aluno,
                nm_aluno
            FROM aluno
            
    
`,
            );
            res.status(200).json(result.row[0]);

        } catch (error) {

            console.error("Erro: ", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro interno do servidor"
            });
        }
    }

}

module.exports = HomeController;
