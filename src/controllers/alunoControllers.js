const pool = require('../db/conn')

class AlunoController {

    async cadastrar(req, res) {
        try {
            const { nome, matricula, curso, telefone, dataCadastro } = req.body;

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


    async home(req, res) {
    try {
        const result = await pool.query('SELECT * FROM aluno ORDER BY id_aluno');
        return res.render('home', { alunos: result.rows }); // ← HTML
    } catch (error) {
        console.error("Erro: ", error);
        return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
    }
}





     async listar(req, res) {
        try {
            const result = await pool.query('SELECT * FROM aluno ORDER BY id_aluno');
            return res.status(200).json({ sucesso: true, dados: result.rows });
        } catch (error) {
            console.error("Erro: ", error);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
        }
    }

    async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const result = await pool.query('SELECT * FROM aluno WHERE id_aluno = $1', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Aluno não encontrado" });
            }
            return res.status(200).json({ sucesso: true, dados: result.rows[0] });
        } catch (error) {
            console.error("Erro: ", error);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
        }
    }

      async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, matricula, curso, telefone } = req.body;
            const result = await pool.query(`
                UPDATE aluno
                SET nm_aluno = $1, matricula = $2, curso = $3, telefone = $4
                WHERE id_aluno = $5
            `, [nome, matricula, curso, telefone, id]);

            if (result.rowCount === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Aluno não encontrado" });
            }
            return res.status(200).json({ sucesso: true, mensagem: "Aluno atualizado com sucesso" });
        } catch (error) {
            console.error("Erro: ", error);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
        }
    }

        async deletar(req, res) {
        try {
            const { id } = req.params;
            const result = await pool.query('DELETE FROM aluno WHERE id_aluno = $1', [id]);

            if (result.rowCount === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Aluno não encontrado" });
            }
            return res.status(200).json({ sucesso: true, mensagem: "Aluno deletado com sucesso" });
        } catch (error) {
            console.error("Erro: ", error);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
        }
    }

}



module.exports = new AlunoController();

