const pool = require('../db/conn')

class LivroController {
    async cadastrarLivro(req, res) {
        try {

            const { titulo, autor, paginas, nacionalidade } = req.body;

            const result = await pool.query(`
                
            INSERT INTO livro
            (titulo, autor,quant_paginas,nacionalidade) 
            VALUES
            (
                $1,
                $2,
                $3,
                $4
            )   
        `, [titulo, autor, paginas, nacionalidade]
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


    async listar(req, res) {

        try {
            const result = await pool.query('SELECT * FROM livro ORDER BY id_livro');
            return res.status(200).json({ sucesso: true, dados: result.rows })

        } catch (error) {
            console.error("Erro: ", error);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });

        }
    }



    async telaPesquisar(req, res) {
        try {
            const result = await pool.query('SELECT * FROM livro ORDER BY id_livro');
            return res.render('pesquisarLivro', { livro: result.rows });
        } catch (error) {
            console.error("Erro: ", error);
            return res.render('pesquisarLivro', { livro: [] });
        }
    }


    async telaEditLivro(req, res) {

        try {
            const { id } = req.params;
            const result = await pool.query('SELECT * FROM livro WHERE id_livro = $1', [id]);

            if (result.rows.length === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Livro não encontrado" });
            }

            return res.render('editLivro', { livro: result.rows[0] });
        } catch (error) {
            console.error("Erro: ", error);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
        }

    }

    async atualizarLivro(req, res) {

        try {

            const { id } = req.params;
            const { titulo, autor, paginas, nacionalidade } = req.body;

            const result = await pool.query(`
            UPDATE livro 
            SET titulo = $1, autor = $2, quant_paginas = $3, nacionalidade = $4
            WHERE id_livro = $5
            `, [titulo, autor, paginas, nacionalidade, id]);

            if (result.rowCount === 0) {
                return res.status(404).json({ sucesso: false, mensagem: "Livro não encontrado" });
            }
            return res.status(200).json({ sucesso: true, mensagem: "Livro atualizado com sucesso" });

        } catch (error) {
            console.error("Erro: ", error);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
        }
    }



    async deletarLivro(req,res){
        try{

            const { id } = req.params;
            const result = await pool.query('DELETE FROM livro WHERE id_livro = $1', [id]);

             if (result.rowCount === 0) {
                    return res.status(404).json({ sucesso: false, mensagem: "Livro não encontrado" });
                }
                return res.status(200).json({ sucesso: true, mensagem: "Livro deletado com sucesso" });

        }catch (error) {
                console.error("Erro: ", error);
                return res.status(500).json({ sucesso: false, mensagem: "Erro interno do servidor" });
            }
    }
}








module.exports = new LivroController();